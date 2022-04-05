import './register.less'
import { connect } from 'react-redux'
import { NavBar, WingBlank, List, InputItem, WhiteSpace, Radio, Button } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import { register } from '../../redux/actions'
import Logo from '../../components/logo/logo'
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

    handleRegister = () => {
        this.props.register(this.state)
    }

    toLogin = () => {
        this.props.history.replace('/login')
    }

    render() {
        if (this.props.user.redirectTo) {
            return <Redirect to={this.props.user.redirectTo}/>
        }
        return (
            <div>
                <NavBar>Silicon Valley</NavBar>
                <Logo />
                { this.props.user.msg
                ?
                <div className='error-msg'>{ this.props.user.msg }</div>
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

                        <InputItem
                            onChange={(val) => this.handleChange('confirmPassword', val)}
                            placeholder="Password"
                            type="password"
                        >Password:</InputItem>

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
                        <Button type="primary" onClick={this.handleRegister}>Signup</Button>
                        <WhiteSpace />
                        <Button onClick={this.toLogin}>Already registered</Button>
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
export default connect(mapStateToProps, {register})(Register)