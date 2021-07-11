import {combineReducers} from "redux"
import blogs from "./blogsRd"
import authRd from "./authRd"
export default combineReducers({
    blogs,
    authRd
})