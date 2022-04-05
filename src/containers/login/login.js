import './login.less'
import { connect } from 'react-redux'
import { login } from '../../redux/actions'
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
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

    handleLogin = () => {
        this.props.login(this.state)
    }

    toRegister = () => {
        this.props.history.replace('/register')
    }

    render() {
        if (this.props.user.redirectTo) {
            return <Redirect to={this.props.user.redirectTo} />
        }
        return (
            <div>
                <NavBar>Silicon Valley</NavBar>
                <Logo />
                {
                    this.props.user.msg
                    ?
                    <div className="error-msg">{ this.props.user.msg }</div>
                    :
                    null
                }
                <WingBlank>
                    <List>
                        <WhiteSpace />
                        <InputItem
                            onChange={(val) => this.handleChange('username', val)}
                            placeholder="Username"
                        >Username:</InputItem>

                        <WhiteSpace />
                        <InputItem
                            onChange={(val) => this.handleChange('password', val)}
                            placeholder="Password"
                            type="password"
                        >Password:</InputItem>
                        
                        <WhiteSpace />
                        <Button type="primary" onClick={this.handleLogin}>Login</Button>
                        <WhiteSpace />
                        <Button onClick={this.toRegister}>Not registered?</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, {login})(Login)