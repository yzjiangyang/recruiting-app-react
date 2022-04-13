import { connect } from 'react-redux';
import { NavBar, InputItem, TextareaItem, Button } from "antd-mobile";
import { Redirect } from 'react-router-dom';
import { update } from '../../redux/actions';
import AvatarSelector from "../../components/avatar-selector/avatar-selector";
import React from "react";


class ApplicantInfo extends React.Component {
    state = {
        header: '',
        post: '',
        info: ''
    }

    setAvatar = (header) => {
        this.setState({
            header: header
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
        // if filled out profile, redirect to home
        if (this.props.user.header) {
            return <Redirect to='/applicant' />
        }
        return (
            <div>
                <NavBar>Fill Out Applicant Profile</NavBar>
                <AvatarSelector setAvatar={this.setAvatar}/>
                <InputItem
                    placeholder="Position"
                    onChange={(val) => this.handleChange('post', val)}
                >Position:</InputItem>
                <TextareaItem
                    title="Experience:"
                    rows={3}
                    onChange={(val) => this.handleChange('info', val)}
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

export default connect(mapStateToProps, {update})(ApplicantInfo)