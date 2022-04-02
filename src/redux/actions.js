import { AUTH_SUCCESS, ERROR_MSG } from './action-types'
import { reqRegister, reqLogin } from '../api/index'


// sync
const authSuccess = (user) => {
    return {type: AUTH_SUCCESS, data: user}
}

const errorMsg = (msg) => {
    return {type: ERROR_MSG, data: msg}
}


// async
export const register = (user) => {
    return async dispatch => {
        const response = await reqRegister(user)
        const result = response.data
        if (result.code === 1) {
            dispatch(authSuccess(result.data)) // result.data => {}
        } else {
            dispatch(errorMsg(result.msg)) // result.msg => string
        }
    }
}

export const login = (user) => {
    const { username, password } = user
    return async dispatch => {
        const response = await reqLogin({username, password})
        const result = response.data
        if (result.code === 1) {
            dispatch(authSuccess(result.data))
        } else {
            dispatch(errorMsg(result.msg))
        }
    }
}