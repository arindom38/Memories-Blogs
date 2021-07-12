import axios from "axios"
// const url = "https://memories-create-app.herokuapp.com/blogs"
const API = axios.create({baseURL: "http://localhost:5000"})

//this will intercept in every api call ,
//it will inject the token in request header and send to bakcend and (middleware) for token verification
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }

    return req

})

//Blog api calls
export const fetchBlogs = () => API.get("/blogs")
export const createBlog = (newBlog) => API.post("/blogs",newBlog)
export const updateBlog = (id,updateBlog) => API.patch(`/blogs/${id}`,updateBlog)
export const deleteBlog = (id) => API.delete(`/blogs/${id}`)
export const likeBlog = (id) => API.patch(`/blogs/${id}/likeBlog`)

//authentication calls
export const signIn = (formData) => API.post("/users/signin",formData)
export const signUp = (formData) => API.post("/users/signup",formData) 