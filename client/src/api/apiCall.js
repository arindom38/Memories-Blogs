import axios from "axios"

const url = "https://memories-create-app.herokuapp.com/blogs"

export const fetchBlogs = () => axios.get(url)
export const createBlog = (newBlog) => axios.post(url,newBlog)
export const updateBlog = (id,updateBlog) => axios.patch(`${url}/${id}`,updateBlog)
export const deleteBlog = (id) => axios.delete(`${url}/${id}`)
export const likeBlog = (id) => axios.patch(`${url}/${id}/likeBlog`)