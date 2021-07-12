import express from "express"
import { getblogs,createblogs,updateBlog,deleteBlog,likeBlog } from "../Controllers/blogsCtl.js"
import auth from "../Middleware/authMd.js"
const route = express.Router()

route.get("/",getblogs)
route.post("/",auth,createblogs)
route.patch('/:id',auth,updateBlog)
route.delete('/:id',auth,deleteBlog)
route.patch('/:id/likeBlog',auth,likeBlog)
export default route