import { combineReducers } from 'redux'


function x(state=0, action) {
    return state
}

function y(state=1, action) {
    return state
}

export default combineReducers({x, y})