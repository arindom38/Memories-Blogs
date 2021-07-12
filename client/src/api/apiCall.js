import axios from "axios"
// const url = "https://memories-create-app.herokuapp.com/blogs"
const API = axios.create({baseURL: "http://localhost:5000"})

//Blog api calls
export const fetchBlogs = () => API.get("/blogs")
export const createBlog = (newBlog) => API.post("/blogs",newBlog)
export const updateBlog = (id,updateBlog) => API.patch(`/blogs/${id}`,updateBlog)
export const deleteBlog = (id) => API.delete(`/blogs/${id}`)
export const likeBlog = (id) => API.patch(`/blogs/${id}/likeBlog`)

//authetication
export const signIn = (formData) => API.post("/users/signin",formData)
export const signUp = (formData) => API.post("/users/signup",formData) 