import express from "express"
import { getblogs,createblogs,updateBlog } from "../Controllers/blogsCtl.js"
const route = express.Router()

route.get("/",getblogs)
route.post("/",createblogs)
route.patch('/:id',updateBlog)

export default route