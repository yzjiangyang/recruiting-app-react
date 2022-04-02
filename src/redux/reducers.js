import { AUTH_SUCCESS, ERROR_MSG } from './action-types'
import { combineReducers } from 'redux'


const initUser = {username: '', type: '', msg: ''}
const user = (state=initUser, action) => {
    switch(action.type) {
        case AUTH_SUCCESS:
            return {...state, ...action.data} 
        case ERROR_MSG:
            return {...state, msg: action.data}
        default:
            return state
    }
}

export default combineReducers({user})