import { NavBar, InputItem, TextareaItem, Button } from "antd-mobile";
import AvatarSelector from "../../components/avatar-selector/avatar-selector";
import React from "react";


export default class ApplicantInfo extends React.Component {
    state = {
        avatar: "",
        position: "",
        experience: ""
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
                <NavBar>Fill Out Applicant Profile</NavBar>
                <AvatarSelector setAvatar={this.setAvatar}/>
                <InputItem
                    placeholder="Position"
                    onChange={(val) => this.handleChange('position', val)}
                >Position:</InputItem>
                <TextareaItem
                    title="Experience:"
                    rows={3}
                    onChange={(val) => this.handleChange('experience', val)}
                ></TextareaItem>
                <Button
                    type="primary"
                    onClick={this.save}
                >Save</Button>
            </div>
        )
    }
}