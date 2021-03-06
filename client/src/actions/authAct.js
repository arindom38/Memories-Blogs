import * as api from "../api/apiCall"
import * as actions from "../constants/actionTypes"

export const signIn = (formData,history) => async (dispatch) =>{
    try {
        const {data} = await api.signIn(formData)
        dispatch({type: actions.AUTH, data})

        history.push('/') 
    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData,history) => async (dispatch) =>{
    try {
        const {data} = await api.signUp(formData)
        dispatch({type: actions.AUTH, data})

        history.push('/')
    } catch (error) {
       console.log(error) 
    }
}