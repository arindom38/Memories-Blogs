import express from "express"
import { getblogs,createblogs } from "../Controllers/blogsCtl.js"
const route = express.Router()

route.get("/",getblogs)
route.post("/create",createblogs)

export default route