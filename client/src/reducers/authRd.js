import { AUTH, LOGOUT } from "../constants/actionTypes"

//reducer must maintain the parameter first state , then action
const authRd = (state = { authData: null }, action) => {
    switch (action.type) {
        case AUTH:
            //save auth data in loca sotage so browser in client can know log in
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data };
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        default:
            return state;
    }
}

export default authRd;