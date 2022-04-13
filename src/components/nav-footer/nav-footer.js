import './nav-footer.less'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import React from 'react'


class NavFooter extends React.Component {

    render() {
        console.log(this.props.navList)
        return (
            <TabBar>
                {
                    this.props.navList.map(nav => {
                        return (
                            <TabBar.Item
                                key={nav.path}
                                title={nav.text}
                                icon={{uri: require(`../../assets/images/${nav.icon}.png`).default}}
                                selectedIcon={{uri: require(`../../assets/images/${nav.icon}-selected.png`).default}}
                                selected={this.props.location.pathname === nav.path}
                                onPress={() => this.props.history.replace(nav.path)}
                            >
                            </TabBar.Item>
                        )
                    })
                }
            </TabBar>
        )
    }
}

export default withRouter(NavFooter)