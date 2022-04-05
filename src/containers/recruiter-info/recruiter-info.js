import React from "react";
import { NavBar, InputItem, TextareaItem, Button } from "antd-mobile";
import AvatarSelector from "../../components/avatar-selector/avatar-selector";


export default class RecruiterInfo extends React.Component {
    render() {
        return (
            <div>
                <NavBar>Fill Out Recruiter Profile</NavBar>
                <AvatarSelector />
                <InputItem placeholder="Position">Position:</InputItem>
                <InputItem placeholder="Company">Company:</InputItem>
                <InputItem placeholder="Salary">Salary:</InputItem>
                <TextareaItem title="Required:" rows={3}></TextareaItem>
                <Button type="primary">Save</Button>
            </div>
        )
    }
}