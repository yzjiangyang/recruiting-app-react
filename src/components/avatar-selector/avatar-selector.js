import React from "react";
import { List, Grid } from 'antd-mobile'


export default class AvatarSelector extends React.Component {
    constructor(props){
        super(props)
        this.headerList = []
        for (let i = 0; i < 20; i++) {
            this.headerList.push({
                text: `head${i + 1}`,
                icon: require(`../../assets/images/head${i + 1}.png`).default
            })
        }
    }

    state = {
        icon: null
    }

    handleClick = ({text, icon}) => {
        this.setState({icon: icon})
        this.props.setAvatar(text)
    }
    
    render() {
        const listHeader = !this.state.icon ? 'Please Select An Avatar' : (
            <div>
                Selected: <img alt="" src={this.state.icon} />
            </div>
        )
        return (
            <List
                renderHeader={() => listHeader}
            >
                <Grid
                    data={this.headerList}
                    columnNum={5}
                    onClick={this.handleClick}
                />
            </List>
        )
    }
}