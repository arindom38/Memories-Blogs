import * as api from "../api/apiCall"
import * as actions from "../constants/actionTypes"

export const signIn = (formData,history) => async (dispatch) =>{
    try {
        //log in to user

        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData,history) => async (dispatch) =>{
    try {
        //sign up new user

        history.push('/')
    } catch (error) {
       console.log(error) 
    }
}