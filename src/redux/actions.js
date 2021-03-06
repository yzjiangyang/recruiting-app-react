import { AUTH_SUCCESS, ERROR_MSG, RECEIVE_USER, RESET_USER } from './action-types'
import { reqRegister, reqLogin, reqUpdate } from '../api/index'
import axios from 'axios'


// sync
const authSuccess = (user) => {
    return {type: AUTH_SUCCESS, data: user}
}

const errorMsg = (msg) => {
    return {type: ERROR_MSG, data: msg}
}

const receiveUser = (user) => {
    return {type: RECEIVE_USER, data: user}
}

const resetUser = (msg) => {
    return {type: RESET_USER, data: msg}
}

// async
export const register = (user) => {
    const {username, password, confirmPassword, type} = user
    if (!username) {
        return errorMsg('Username cannot be empty!')
    }
    if (!password) {
        return errorMsg('Password cannot be empty!')
    }
    if (password !== confirmPassword) {
        return errorMsg("Passwords don't match!")
    }
    // ajax request
    return async dispatch => {
        const response = await reqRegister({username, password, type})
        const result = response.data
        if (result.code === 0) {
            dispatch(authSuccess(result.data)) // result.data => {}
        } else {
            dispatch(errorMsg(result.msg)) // result.msg => string
        }
    }
}

export const login = (user) => {
    const { username, password } = user
    if (!username) {
        return errorMsg('Username cannot be empty!')
    }
    if (!password) {
        return errorMsg('Password cannot be empty!')
    }
    // ajax request
    return async dispatch => {
        const response = await reqLogin({username, password})
        const result = response.data
        if (result.code === 0) {
            dispatch(authSuccess(result.data))
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}

export const update = (user) => {
    return async dispatch => {
        const response = await reqUpdate(user)
        const result = response.data
        if (result.code === 0) {
            dispatch(receiveUser(result.data))
        } else {
            dispatch(resetUser(result.msg))
        }
    }
}

export const getUser = ()=> {
    return async dispatch => {
        const response = await axios.get("/user")
        const result = response.data
        if(result.code === 0) {
            dispatch(receiveUser(result.data))
        } else {
            dispatch(resetUser(result.msg))
        }
    }
}