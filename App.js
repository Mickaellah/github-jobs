import React from 'react';

import {
	BrowserRouter as Router,
    Switch,
	Route
} from 'react-router-dom';



import SearchJobByTitle from './Components/SearchJobByTitle';
import JobLists from './Components/JobLists';
import FullTimeJob from './Components/FullTimeJob';
import SearchJobByCity from './Components/SearchJobByCity';
import CheckboxesForJobocation from './Components/CheckboxesForJobLocation';

import JobDetails from './Components/JobDetails';

export default function App() {
    return (
        <div>
            <SearchJobByTitle />
            <article className="main_components">
                <div className="search_different_jobs">
                    <FullTimeJob />
                    <SearchJobByCity />
                    <CheckboxesForJobocation />
                </div>

            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className="jobs">
                            <JobLists />
                        </div>
                    </Route>
                    <Route path="/:id">
                        <JobDetails />
                    </Route>
                </Switch>
            </Router>
            </article>
        </div>
    )
}
