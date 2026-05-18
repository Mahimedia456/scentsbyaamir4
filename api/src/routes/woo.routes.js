import express from "express";
import {
  createOrder,
  getCategories,
  getOrderById,
  getOrders,
  getProductById,
  getProductBySlug,
  getProducts,
  healthCheck,
  trackOrder,
} from "../controllers/woo.controller.js";

const router = express.Router();

router.get("/health", healthCheck);

router.get("/products", getProducts);
router.get("/products/slug/:slug", getProductBySlug);
router.get("/products/:id", getProductById);

router.get("/categories", getCategories);

router.get("/orders", getOrders);
router.post("/orders", createOrder);
router.get("/orders/track", trackOrder);
router.get("/orders/:id", getOrderById);

export default router;