import * as api from "../api/apiCall"
import * as actions from "../constants/actionTypes"
//action creators
export const getblogs = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchBlogs()
        dispatch({type: actions.FETCH_ALL, payload: data})

    } catch (error) {
        console.log(error)
    }
}
//for posting new blog
export const createBlog = (blog) => async (dispatch) => {
    try {
        const {data} = await api.createBlog(blog)
        dispatch({type: actions.CREATE, payload:data})
    } catch (error) {
        console.log(error)
    }
}

//for updating new blog
export const updateBlog = (id,blog) =>async (dispatch) =>{
    try {
        const {data} = await api.updateBlog(id,blog)
        dispatch({type: actions.UPDATE,payload: data})
    } catch (error) {
        console.error(error)
    }
}

//delete blog
export const deleteBlog = (id) => async (dispatch) => {
    try {
        await api.deleteBlog(id)
        dispatch({type: actions.DELETE,payload: id})
    } catch (error) {
        console.log(error)
    }
}

//like blog
export const likeBlog = (id) => async (dispatch) => {
    try {
        const {data} = await api.likeBlog(id)
        dispatch({type: actions.UPDATE,payload: data})
    } catch (error) {
        console.log(error)
    }
}
