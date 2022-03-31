import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button } from 'antd-mobile'
import Logo from "../../components/logo/logo"
import React from 'react'

class Register extends React.Component {
    state = {
        username: '',
        password: '',
        confirmPassword: '',
        type: 'applicant'
    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    register = () => {
        console.log(this.state)
    }

    toLogin = () => {
        this.props.history.replace('/login')
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

                        <InputItem
                            onChange={(val) => this.handleChange('confirmPassword', val)} type="password"
                        >Password</InputItem>

                        <WhiteSpace />
                        <List.Item>
                            <span>User Type</span>
                            &nbsp;&nbsp;&nbsp;
                            <Radio
                                checked={this.state.type==='applicant'}
                                onChange={() => this.handleChange('type', 'applicant')}
                            >Applicant</Radio>
                            
                            &nbsp;&nbsp;&nbsp;
                            <Radio
                                checked={this.state.type==='recruiter'}
                                onChange={() => this.handleChange('type', 'recruiter')}
                            >Recruiter</Radio>
                        </List.Item>
                        <WhiteSpace />
                        <Button type="primary" onClick={this.register}>Signup</Button>
                        <WhiteSpace />
                        <Button onClick={this.toLogin}>Already registered</Button>
                    </List>
                </WingBlank>
            </div>
        )
    }
}

export default Register