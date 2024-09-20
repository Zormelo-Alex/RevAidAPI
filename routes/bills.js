import express from "express"
import { authenticateToken } from "../helpers/helper.js"
import { getAllBillDeliveries, getAllBills, getBillByAssetCode, getBillByDevice, getBillByNumber, getBillDeliveriesByNumber } from "../controllers/bills.js"
const router = express.Router()


router.get("/getAllBills", authenticateToken, getAllBills)
router.get("/getBillByNumber/:id", authenticateToken, getBillByNumber)
router.get("/getBillByAssetCode/:id", authenticateToken, getBillByAssetCode)
router.get("/getAllBillDeliveries", authenticateToken, getAllBillDeliveries)
router.get("/getBillDeliveriesByNumber/:id", authenticateToken, getBillDeliveriesByNumber)
router.get("/getBillByDevice/:id", authenticateToken, getBillByDevice)

export default router