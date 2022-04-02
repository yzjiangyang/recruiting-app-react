import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'


export default createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk))
)