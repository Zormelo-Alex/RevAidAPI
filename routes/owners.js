import express from "express"
import { getAllOwners, getSingleOwner } from "../controllers/owners.js"
import { authenticateToken } from "../helpers/helper.js"
const router = express.Router()


router.get("/getAllOwners", authenticateToken, getAllOwners)
router.get("/getOwnerById/:id", authenticateToken, getSingleOwner)

export default router