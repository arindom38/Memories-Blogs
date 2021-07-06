import express from "express"
import { getblogs,createblogs,updateBlog,deleteBlog,likeBlog } from "../Controllers/blogsCtl.js"
const route = express.Router()

route.get("/",getblogs)
route.post("/",createblogs)
route.patch('/:id',updateBlog)
route.delete('/:id',deleteBlog)
route.patch('/:id/likeBlog',likeBlog)
export default route