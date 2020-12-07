import React from 'react';
import Form from './Components/Form';
import JobLists from './Components/JobLists';
import FullTimeJob from './Components/FullTimeJob';
import SearchForLocation from './Components/SearchForLocation';
import CheckboxesForJobocation from './Components/CheckboxesForJobLocation';

export default function App() {
    return (
        <div>
            <Form />
            <article className="main_components">
                <div className="search_different_jobs">
                    <FullTimeJob />
                    <SearchForLocation />
                    <CheckboxesForJobocation />
                </div>
                <div className="jobs">
                    <JobLists />
                </div>
            </article>
        </div>
    )
}
