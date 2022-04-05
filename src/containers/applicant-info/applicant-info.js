import React from "react";
import { NavBar, InputItem, TextareaItem, Button } from "antd-mobile";
import AvatarSelector from "../../components/avatar-selector/avatar-selector";


export default class ApplicantInfo extends React.Component {
    render() {
        return (
            <div>
                <NavBar>Fill Out Applicant Profile</NavBar>
                <AvatarSelector />
                <InputItem placeholder="Position">Position:</InputItem>
                <TextareaItem title="Experience:" rows={3}></TextareaItem>
                <Button type="primary">Save</Button>
            </div>
        )
    }
}