import { connect } from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from "antd-mobile";
import { Redirect } from 'react-router-dom';
import { update } from '../../redux/actions';
import AvatarSelector from "../../components/avatar-selector/avatar-selector";
import React from "react";


class RecruiterInfo extends React.Component {
    state = {
        avatar: '',
        position: '',
        info: '',
        company: '',
        salary: ''
    }

    setAvatar = (avatar) => {
        this.setState({
            avatar: avatar
        })
    }

    handleChange = (name, val) => {
        this.setState({
            [name]: val
        })
    }

    save = () => {
        this.props.update(this.state)
    }

    render() {
        if (this.props.user.avatar) {
            return <Redirect to='/recruiter' />
        }
        return (
            <div>
                <NavBar>Fill Out Recruiter Profile</NavBar>
                <AvatarSelector setAvatar={this.setAvatar} />
                <InputItem
                    placeholder="Position"
                    onChange={val => this.handleChange('position', val)}
                >Position:</InputItem>
                <InputItem
                    placeholder="Company"
                    onChange={val => this.handleChange('company', val)}
                >Company:</InputItem>
                <InputItem
                    placeholder="Salary"
                    onChange={val => this.handleChange('salary', val)}
                >Salary:</InputItem>
                <TextareaItem
                    title="Required:"
                    rows={3}
                    onChange={val => this.handleChange('info', val)}
                ></TextareaItem>
                <Button
                    type="primary"
                    onClick={this.save}
                >Save</Button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {update})(RecruiterInfo)