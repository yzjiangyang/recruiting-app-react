import { connect } from 'react-redux'
import { getRedirectTo } from '../../utils'
import { getUser } from '../../redux/actions'
import { NavBar } from 'antd-mobile'
import { Switch, Route, Redirect } from 'react-router-dom'
import Applicant from '../applicant/applicant'
import ApplicantInfo from "../applicant-info/applicant-info";
import Cookies from 'js-cookie';
import Message from '../message/message'
import NavFooter from '../../components/nav-footer/nav-footer'
import NotFound from '../../components/not-found/not-found'
import Personal from '../personal/personal'
import React from "react";
import Recruiter from '../recruiter/recruiter'
import RecruiterInfo from "../recruiter-info/recruiter-info";


class Main extends React.Component {
    constructor(props) {
        super(props)
        this.navList = [
            {
                path: '/recruiter',
                component: Recruiter,
                title: "Applicant List",
                icon: 'dashen',
                text: 'Applicant'
            },
            {
                path: '/applicant',
                component: Applicant,
                title: 'Recruiter List',
                icon: 'laoban',
                text: 'Recruiter'
            },
            {
                path: '/message',
                component: Message,
                title: 'Message',
                icon: 'message',
                text: 'Message'
            },
            {
                path: '/personal',
                component: Personal,
                title: 'Personal Center',
                icon: 'personal',
                text: 'Me'
            }
        ]
    }
    
    componentDidMount() {
        const userId = Cookies.get('userid')
        const {_id} = this.props.user
        if (userId && !_id) {
            this.props.getUser()
        }
    }

    // filter navList
    filterNavList = (currentNav) => {
        // add hidden boolean for footer
        if (currentNav) {
            if (this.props.user.type === 'recruiter') {
                this.navList[1].hide = true
            } else {
                this.navList[0].hide = true
            }
        }
        // filter
        const navList = this.navList.filter(nav => !nav.hide)
        return navList
    }

    render() {
        // auto login with cookie
        const userId = Cookies.get('userid')
        if (!userId) {
            return (<Redirect to='/login' />)
        }

        const {user} = this.props
        if (!user._id) {
            return null
        }

        let path = this.props.location.pathname
        if (path === '/') {
            path = getRedirectTo(user.type, user.header)
            return (<Redirect to={path} />)
        }
        // find current nav
        const currentNav = this.navList.find(nav => nav.path === this.props.location.pathname)
        // filter navList
        const navList = this.filterNavList(currentNav)

        return (
            <div>
                {currentNav ? <NavBar>{currentNav.title}</NavBar> : null}
                <Switch>
                    {
                        this.navList.map(nav => {
                            return (
                                <Route key={nav.path} path={nav.path} component={nav.component} />
                            )
                        })
                    }  
                    <Route path="/recruiterinfo" component={RecruiterInfo} />
                    <Route path="/applicantinfo" component={ApplicantInfo} />
                    <Route component={NotFound} />
                </Switch>
                {currentNav ? <NavFooter navList={navList} /> : null}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Main)