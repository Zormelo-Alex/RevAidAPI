import express from "express"
import { authenticateToken } from "../helpers/helper.js"
import { getAllBillboardMakes, getAllBillboardPartyType, getBillboardMakeById, getBillboardPartTypeById } from "../controllers/billboards.js"
const router = express.Router()


router.get("/getAllBillboardPartyType", authenticateToken, getAllBillboardPartyType)
router.get("/getBillboardPartTypeById/:id", authenticateToken, getBillboardPartTypeById)
router.get("/getAllBillboardMakes", authenticateToken, getAllBillboardMakes)
router.get("/getBillboardMakeById/:id", authenticateToken, getBillboardMakeById)

export default router