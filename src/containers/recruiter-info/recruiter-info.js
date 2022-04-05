import { NavBar, InputItem, TextareaItem, Button } from "antd-mobile";
import AvatarSelector from "../../components/avatar-selector/avatar-selector";
import React from "react";


export default class RecruiterInfo extends React.Component {
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
        console.log(this.state)
    }

    render() {
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