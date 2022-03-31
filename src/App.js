import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Login from './containers/login/login'
import Main from './containers/main/main'
import React from 'react'
import Register from './containers/register/register'
import store from './redux/store'


function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route component={Main} />
                </Switch>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
