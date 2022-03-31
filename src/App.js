import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login/login'
import Main from './components/main/main'
import React from 'react'
import Register from './components/register/register'


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route component={Main} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
