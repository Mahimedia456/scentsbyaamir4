import express from "express";
import {
  getSyncStatus,
  syncWooAll,
  syncWooCategories,
  syncWooProducts,
} from "../controllers/sync.controller.js";

const router = express.Router();

router.get("/status", getSyncStatus);
router.post("/all", syncWooAll);
router.post("/products", syncWooProducts);
router.post("/categories", syncWooCategories);

export default router;