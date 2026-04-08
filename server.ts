import { Hono } from "hono"
import { cors } from "hono/cors"

const app = new Hono()

// CORS for dev (Vite on different port)
app.use(
  "/api/*",
  cors({
    origin: (origin) => origin,
    credentials: true,
  }),
)

// Health check
app.get("/api/health", (c) => {
  return c.json({ status: "ok", timestamp: new Date().toISOString() })
})

// ============================================
// ADD YOUR API ROUTES HERE
// ============================================

// ============================================

// Static file serving (production only)
const isProduction = process.env.NODE_ENV === "production"

if (isProduction) {
  const { serveStatic } = await import("hono/bun")
  app.use("/*", serveStatic({ root: "./dist" }))
  app.get("*", serveStatic({ path: "./dist/index.html" }))
}

const PORT = process.env.API_PORT || process.env.PORT || 4000

console.log(
  `${isProduction ? "Production" : "API"} server running on http://localhost:${PORT}`,
)

export default {
  port: PORT,
  fetch: app.fetch,
}
