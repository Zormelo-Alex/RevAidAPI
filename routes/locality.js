import express from "express"
import { authenticateToken } from "../helpers/helper.js"
import { getAllLocality, getSingleLocality } from "../controllers/locality.js"
const router = express.Router()


router.get("/getAllLocality", authenticateToken, getAllLocality)
router.get("/getLocalityByZoneId/:id", authenticateToken, getSingleLocality)

export default router