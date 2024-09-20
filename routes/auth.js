import express from "express"
const router = express.Router()
import { getToken, login, resetAllPaswords } from "../controllers/auth.js"
import { authenticateToken } from "../helpers/helper.js"


router.post("/login", login)
router.post("/getToken", authenticateToken, getToken)
router.put("/resetPasswords", resetAllPaswords)

export default router