import axios from "axios"

const url = "http://localhost:5000/blogs"

export const fetchBlogs = () => axios.get(url)
export const createBlog = (newBlog) => axios.post(url,newBlog)