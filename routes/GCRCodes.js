import express from "express"
import { authenticateToken } from "../helpers/helper.js"
import { getGCRCodes, getGCRCodesbyTaxYear } from "../controllers/GCRCodes.js"
const router = express.Router()


router.get("/getGCRCodes", authenticateToken, getGCRCodes)
router.get("/getGCRCodeByTaxYear/:id", authenticateToken, getGCRCodesbyTaxYear)

export default router