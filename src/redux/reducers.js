import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER } from './action-types'
import { combineReducers } from 'redux'
import { getRedirectTo } from '../utils'


const initUser = {
    username: '',
    type: '',
    msg: '',
    redirectTo: ''
}
const user = (state=initUser, action) => {
    switch(action.type) {
        case AUTH_SUCCESS:
            const { type, header } = action.data
            return {
                ...state,
                ...action.data,
                // redirect to xxx page after register/login
                redirectTo: getRedirectTo(type, header)
            } 
        case ERROR_MSG:
            return {...state, msg: action.data}
        case RECEIVE_USER:
            return {...state, ...action.data}
        case RESET_USER:
            return {...initUser, msg: action.data}
        default:
            return state
    }
}

export default combineReducers({user})