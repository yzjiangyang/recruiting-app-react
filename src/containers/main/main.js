import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom'
import ApplicantInfo from "../applicant-info/applicant-info";
import React from "react";
import RecruiterInfo from "../recruiter-info/recruiter-info";


class Main extends React.Component {
    render() {
        if (!this.props.user._id) {
            return <Redirect to='/login' />
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
export default connect(mapStateToProps)(Main)