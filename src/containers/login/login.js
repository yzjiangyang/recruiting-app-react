import { NavBar, WingBlank, List, InputItem, WhiteSpace, Button } from 'antd-mobile'
import Logo from "../../components/logo/logo"
import React from 'react'

class Login extends React.Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    login = () => {
        console.log(this.state)
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render() {
        return (
            <div>
                <NavBar>Silicon Valley</NavBar>
                <Logo />
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            onChange={(val) => this.handleChange('username', val)}
                        >Username:</InputItem>

                        <WhiteSpace />
                        <InputItem
                            onChange={(val) => this.handleChange('password', val)} type="password"
                        >Password</InputItem>
                        
                        <WhiteSpace />
                        <Button type="primary" onClick={this.login}>Login</Button>
                        <WhiteSpace />
                        <Button onClick={this.toRegister}>Not registered?</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default Login