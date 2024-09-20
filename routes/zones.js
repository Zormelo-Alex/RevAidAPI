import express from "express"
import { authenticateToken } from "../helpers/helper.js"
import { getAllZones, getSingleZone } from "../controllers/zones.js"
const router = express.Router()


router.get("/getAllZones", authenticateToken, getAllZones)
router.get("/getZoneByDivisionId/:id", authenticateToken, getSingleZone)

export default router