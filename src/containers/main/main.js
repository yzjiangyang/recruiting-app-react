import React from "react";
import { Switch, Route } from 'react-router-dom'
import RecruiterInfo from "../recruiter-info/recruiter-info";
import ApplicantInfo from "../applicant-info/applicant-info";


class Main extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/recruiterinfo" component={RecruiterInfo} />
                <Route path="/applicantinfo" component={ApplicantInfo} />
            </Switch>
        )
    }
}

export default Main