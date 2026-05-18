import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import morgan from "morgan";
import wooRoutes from "./routes/woo.routes.js";
import syncRoutes from "./routes/sync.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  process.env.FRONTEND_URL,
  process.env.SHOP_FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
  })
);

app.options(/.*/, cors());

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Scents By Aamir API is running.",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    status: "healthy",
    service: "scents-woocommerce-proxy",
  });
});

app.use("/api/woo", wooRoutes);
app.use("/api/sync", syncRoutes);
app.use((req, res) => {
  res.status(404).json({
    ok: false,
    message: "Route not found.",
    path: req.originalUrl,
  });
});

app.use((error, req, res, next) => {
  console.error("[Unhandled Error]", error);

  res.status(500).json({
    ok: false,
    message: "Internal server error.",
    error: error.message,
  });
});

app.listen(PORT, () => {
  console.log(`Scents By Aamir API running on http://localhost:${PORT}`);
  console.log(`Allowed origins: ${allowedOrigins.join(", ")}`);
});