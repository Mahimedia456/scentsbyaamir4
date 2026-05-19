import express from "express";
import {
  getSyncStatus,
  syncWooAll,
  syncWooAllCron,
  syncWooCategories,
  syncWooProducts,
} from "../controllers/sync.controller.js";

const router = express.Router();

router.get("/status", getSyncStatus);

router.post("/all", syncWooAll);
router.post("/products", syncWooProducts);
router.post("/categories", syncWooCategories);

router.get("/all-cron", syncWooAllCron);
router.post("/all-cron", syncWooAllCron);

export default router;