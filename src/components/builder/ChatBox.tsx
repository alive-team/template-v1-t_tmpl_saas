import { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '@/types/portfolio';
import { Send } from 'lucide-react';

interface ChatBoxProps {
  messages: ChatMessage[];
  onSendMessage: (content: string) => void;
  featureName: string;
}

export function ChatBox({ messages, onSendMessage, featureName }: ChatBoxProps) {
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  return (
    <div className="flex flex-col h-full border border-border/40 bg-background">
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.length === 0 ? (
          <div className="text-foreground/40 py-12">
            Describe changes you'd like to make
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] leading-relaxed ${
                  message.role === 'user'
                    ? 'text-foreground'
                    : 'text-foreground/70'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSubmit} className="p-6 border-t border-border/40">
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your change..."
            className="flex-1 px-0 py-2 bg-transparent border-b border-border/40 focus:outline-none focus:border-foreground/60 transition-colors placeholder:text-foreground/30"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="text-foreground hover:text-foreground/60 disabled:text-foreground/20 disabled:cursor-not-allowed transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
