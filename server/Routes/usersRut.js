import express from "express"
import { signIn,signUp } from "../Controllers/usersCtl.js"
const route = express.Router()

route.post('/signin',signIn)
route.post('/signup',signUp)

export default route