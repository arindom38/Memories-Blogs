import * as api from "../api/apiCall"

//action creators
export const getblogs = () => async (dispatch) =>{
    try {
        const {data} = await api.fetchBlogs()
        dispatch({type: "FETCH_ALL", payload: data})

    } catch (error) {
        console.log(error.message)
    }
}
//for posting new blog
export const createBlog = (blog) => async (dispatch) => {
    try {
        const {data} = await api.createBlog(blog)
        dispatch({type: "CREATE", payload:data})
    } catch (error) {
        console.log(error.message)
    }
}
