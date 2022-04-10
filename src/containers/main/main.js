import { connect } from 'react-redux'
import { getRedirectTo } from '../../utils'
import { getUser } from '../../redux/actions'
import { Switch, Route, Redirect } from 'react-router-dom'
import ApplicantInfo from "../applicant-info/applicant-info";
import Cookies from 'js-cookie';
import React from "react";
import RecruiterInfo from "../recruiter-info/recruiter-info";


class Main extends React.Component {
    componentDidMount() {
        const userId = Cookies.get('userid')
        const {_id} = this.props.user
        if (userId && !_id) {
            this.props.getUser()
        }
    }

    render() {
        const userId = Cookies.get('userid')
        if (!userId) {
            return <Redirect to='login' />
        }

        const {user} = this.props 
        if (!user._id) {
            return null
        }
        let path = this.props.location.pathname
        if (path === '/') {
            console.log(user)
            path = getRedirectTo(user.type, user.header)
            return <Redirect to={path} />
        }

        return (
            <Switch>
                <Route path="/recruiterinfo" component={RecruiterInfo} />
                <Route path="/applicantinfo" component={ApplicantInfo} />
            </Switch>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, {getUser})(Main)