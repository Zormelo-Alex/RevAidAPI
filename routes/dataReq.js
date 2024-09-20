import express from "express"
import { authenticateToken } from "../helpers/helper.js"
import { getAllDivisions, getSingleDivision,  } from "../controllers/divisions.js"
import { getImageByName, sendData, sendImage } from "../controllers/dataReq.js"
const router = express.Router()


router.post("/sendData/{dataSource}", authenticateToken, sendData)
router.post("/sendImage", authenticateToken, sendImage)
router.get("/getImageByName/{imageName}", authenticateToken, getImageByName)

export default router