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
            <FullTimeJob />
            <SearchForLocation />
            <CheckboxesForJobocation />
            <JobLists />
        </div>
    )
}
