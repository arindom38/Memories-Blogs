import {FETCH_ALL,CREATE,UPDATE,DELETE} from "../constants/actionTypes"
const blogs = (blogs = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...blogs, action.payload];
        case UPDATE: //if any blog is updated updated that blog and return ,if not return all the blog without updating
            return blogs.map((blog) => blog._id === action.payload._id ? action.payload : blog)
        case DELETE:
            return blogs.filter(blog => blog._id !== action.payload)
        default:
            return blogs;
    }
}
export default blogs