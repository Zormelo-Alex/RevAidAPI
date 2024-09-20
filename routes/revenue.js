import express from "express"
import { authenticateToken } from "../helpers/helper.js"
import { getAllRevenueAssets, getAllRevenueCategory, getAllRevenueSource, getAllRevenueTypes, getRevenueAssetsByCode } from "../controllers/revenue.js"
const router = express.Router()


router.get("/getAllRevenueAssets", authenticateToken, getAllRevenueAssets)
router.get("/getRevenueAssetsByCode/:id", authenticateToken, getRevenueAssetsByCode)
router.get("/getAllRevenueCategory", authenticateToken, getAllRevenueCategory)
router.get("/getAllRevenueSource", authenticateToken, getAllRevenueSource)
router.get("/getAllRevenueTypes", authenticateToken, getAllRevenueTypes)



export default router