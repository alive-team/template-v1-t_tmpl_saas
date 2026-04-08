import React, { useState } from 'react';
import { Menu, X, Check, ArrowRight, Copy } from 'lucide-react';

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  const copyCode = () => {
    const code = `const response = await [productName].scrape({
  url: 'https://example.com',
  format: 'markdown'
});
console.log(response.data);`;
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-gray-100">
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
              L
            </div>
            <span className="text-xl font-bold hidden sm:inline">Product Name</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-400 hover:text-white transition text-sm">Features</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition text-sm">Pricing</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Docs</a>
            <a href="#" className="text-gray-400 hover:text-white transition text-sm">Blog</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block px-4 py-2 text-gray-400 hover:text-white transition text-sm font-medium">
              Sign In
            </button>
            <button className="px-6 py-2 rounded-lg text-slate-950 font-semibold text-sm bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl">
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-t border-slate-800">
            <div className="px-6 py-4 space-y-4">
              <a href="#features" className="block text-gray-400 hover:text-white transition">Features</a>
              <a href="#pricing" className="block text-gray-400 hover:text-white transition">Pricing</a>
              <a href="#" className="block text-gray-400 hover:text-white transition">Docs</a>
              <a href="#" className="block text-gray-400 hover:text-white transition">Blog</a>
              <button className="w-full px-6 py-2 rounded-lg text-slate-950 font-semibold text-sm bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 px-6 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-full text-sm font-medium text-gray-300">
            Welcome to a Better Way
          </div>

          <h1 className="text-8xl md:text-10xl lg:text-11xl font-bold mb-8 leading-none tracking-tight">
            <span className="bg-gradient-to-r from-orange-500 to-cyan-500 bg-clip-text text-transparent">Build Something Great</span>
          </h1>

          <p className="text-4xl md:text-6xl lg:text-7xl text-gray-200 mb-8 max-w-5xl mx-auto leading-tight font-medium">
            Create beautiful products with powerful tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="px-8 py-4 rounded-lg text-slate-950 font-semibold w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl text-lg">
              Get Started
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-lg border border-slate-700 text-gray-300 hover:text-white font-semibold w-full sm:w-auto transition text-lg">
              Learn More
            </button>
          </div>

          {/* CODE BLOCK */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-2xl max-w-2xl mx-auto">
            <div className="bg-slate-800 px-4 py-3 border-b border-slate-700 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="p-6 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-4">// Getting Started</div>
              <div className="text-gray-300">
                <span className="text-orange-500">import</span> {'{'}Product{'}'} <span className="text-orange-500">from</span> <span className="text-green-400">'product'</span>;<br/>
                <br/>
                <span className="text-orange-500">const</span> app = <span className="text-orange-500">new</span> <span className="text-cyan-400">Product</span>();<br/>
                <br/>
                <span className="text-orange-500">app</span>.<span className="text-cyan-400">initialize</span>({'{'})<br/>
                &nbsp;&nbsp;name: <span className="text-green-400">'My Project'</span>,<br/>
                &nbsp;&nbsp;theme: <span className="text-green-400">'modern'</span><br/>
                {'}'});<br/>
                <br/>
                <span className="text-cyan-400">await</span> app.<span className="text-cyan-400">launch</span>();
              </div>
              <button
                onClick={copyCode}
                className="mt-4 text-cyan-500 hover:text-cyan-400 transition text-sm font-medium flex items-center gap-2"
              >
                <Copy size={16} />
                {copiedCode ? 'Copied!' : 'Copy Code'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-slate-800 py-8 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 text-sm mb-6">Trusted by leading companies</p>
          <div className="flex items-center justify-center gap-8 flex-wrap opacity-70">
            {['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5'].map((logo, i) => (
              <div key={i} className="text-gray-400 font-semibold text-sm">{logo}</div>
            ))}
          </div>
          <div className="text-center text-gray-500 text-sm mt-6 space-x-6 flex justify-center flex-wrap">
            <span>XXX,XXX+ API Calls / Month</span>
            <span>•</span>
            <span>XXXX+ Active Developers</span>
            <span>•</span>
            <span>XX% Uptime SLA</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">Everything you need to succeed with powerful capabilities</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '◆', title: 'Fast & Reliable', desc: 'Lightning quick performance you can depend on' },
              { icon: '◆', title: 'Easy to Use', desc: 'Intuitive interface anyone can learn' },
              { icon: '◆', title: 'Scalable', desc: 'Grows with your business needs' },
              { icon: '◆', title: 'Secure', desc: 'Enterprise-grade security built in' },
              { icon: '◆', title: 'Support', desc: '24/7 expert support team ready' },
              { icon: '◆', title: 'Flexible', desc: 'Customize to fit your workflow' },
            ].map((feature, idx) => (
              <div key={idx} className="group p-6 bg-slate-900 border border-slate-800 rounded-lg hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all cursor-pointer">
                <div className="text-2xl mb-4 text-orange-500">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Three-Step Setup</h2>
            <p className="text-gray-300 text-lg">Get up and running in just a few minutes</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { title: 'Sign Up', desc: 'Create your account in seconds' },
                { title: 'Configure', desc: 'Customize settings to your needs' },
                { title: 'Launch', desc: 'Start using right away' }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center text-slate-950 font-bold text-lg">{idx + 1}</div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 font-mono text-sm overflow-x-auto">
              <div className="text-gray-500 mb-4">// Configuration Example</div>
              <div className="text-gray-300 space-y-1">
                <div><span className="text-orange-500">settings</span> = {'{'};<br/></div>
                <div className="mt-2">&nbsp;&nbsp;theme: <span className="text-green-400">'dark'</span>,<br/></div>
                <div>&nbsp;&nbsp;notifications: <span className="text-cyan-400">true</span>,<br/></div>
                <div>&nbsp;&nbsp;autoSave: <span className="text-cyan-400">true</span>,<br/></div>
                <div>&nbsp;&nbsp;language: <span className="text-green-400">'en'</span><br/></div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Works Everywhere</h2>
            <p className="text-gray-300 text-lg">Compatible with your favorite platforms</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['📘 JavaScript', '🐍 Python', '🦀 Rust', '☕ Java', '⚡ Go', '🔷 TypeScript'].map((lang, i) => (
              <div key={i} className="p-6 bg-slate-900 border border-slate-800 rounded-lg text-center hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all cursor-pointer group">
                <div className="text-3xl mb-3">{lang.split(' ')[0]}</div>
                <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">{lang.split(' ')[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Transparent Pricing</h2>
            <p className="text-gray-300 text-lg mb-8">Choose the perfect plan for your needs</p>

            <div className="flex items-center justify-center gap-4">
              <span className="text-gray-400">Monthly</span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative inline-flex h-8 w-14 items-center rounded-full bg-slate-700 transition hover:bg-slate-600"
              >
                <span
                  className="inline-block h-6 w-6 transform rounded-full bg-white transition absolute"
                  style={{ left: isYearly ? 'auto' : '2px', right: isYearly ? '2px' : 'auto' }}
                ></span>
              </button>
              <span className="text-gray-400">Yearly <span className="text-cyan-500 text-sm">(Save 20%)</span></span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: 'Starter', price: isYearly ? '279' : '29', desc: 'For individuals', features: 3 },
              { name: 'Professional', price: isYearly ? '949' : '99', desc: 'For teams', features: 4, highlight: true },
              { name: 'Enterprise', price: 'Custom', desc: 'For enterprises', features: 5 },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg p-8 transition-all ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-orange-500/20 to-orange-600/20 border-2 border-orange-500 shadow-lg shadow-orange-500/20'
                    : 'bg-slate-900 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {plan.highlight && (
                  <div className="mb-4 inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/50 text-orange-400 text-xs font-bold rounded-full">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6 text-sm">{plan.desc}</p>

                <div className="mb-8">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/month</span>
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold mb-8 transition ${
                  plan.highlight
                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-slate-950'
                    : 'border border-orange-500/30 text-gray-300 hover:text-white hover:border-orange-500/60'
                }`}>
                  Get Started
                </button>

                <ul className="space-y-3 text-gray-400 text-sm">
                  {[...Array(plan.features)].map((_, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className="text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>Pricing Feature {i + 1}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Loved by Our Community</h2>
            <p className="text-gray-300 text-lg">See what people are saying</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Developer testimonial 1',
              'Developer testimonial 2',
              'Developer testimonial 3'
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-400 mb-6 italic text-sm">"{testimonial}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
                  <div>
                    <p className="font-semibold text-sm">Developer Name</p>
                    <p className="text-gray-500 text-xs">Title at Company</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your Journey Today</h2>
          <p className="text-xl text-gray-300 mb-8">No credit card required. Join thousands of satisfied users.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 rounded-lg text-slate-950 font-semibold w-full sm:w-auto bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition shadow-lg hover:shadow-xl">
              Start Free Trial
            </button>
            <button className="px-8 py-4 rounded-lg border border-slate-700 text-gray-300 hover:text-white font-semibold w-full sm:w-auto transition">
              Read Documentation
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-12 pb-12 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-slate-950">
                  L
                </div>
                <span className="font-bold">Product Name</span>
              </div>
              <p className="text-gray-500 text-sm">Brief company description</p>
            </div>

            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security', 'Status'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers', 'Contact'] },
              { title: 'Resources', links: ['Documentation', 'API Reference', 'Guides', 'Examples'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Cookie Policy', 'GDPR'] },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
                <ul className="space-y-2 text-gray-500 text-sm">
                  {section.links.map((link, j) => (
                    <li key={j}><a href="#" className="hover:text-white transition">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
            <p>&copy; 2024 Product Name. All rights reserved.</p>
            <div className="flex items-center gap-6">
              {['Twitter', 'GitHub', 'LinkedIn', 'Discord'].map((social, i) => (
                <a key={i} href="#" className="hover:text-white transition">{social}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}