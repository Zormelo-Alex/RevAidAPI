import express from "express"
import { authenticateToken } from "../helpers/helper.js"
import { getAllDivisions, getSingleDivision,  } from "../controllers/divisions.js"
const router = express.Router()


router.get("/getAllDivisions", authenticateToken, getAllDivisions)
router.get("/getDivisionsById/:id", authenticateToken, getSingleDivision)

export default router