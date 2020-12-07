import React from 'react';
import Form from './Components/Form';
import JobLists from './Components/JobLists';
import FullTimeJob from './Components/FullTimeJob';
import SearchForLocation from './Components/SearchForLocation';

export default function App() {
    return (
        <div>
            <Form />
            <FullTimeJob />
            <SearchForLocation />
            <JobLists />
        </div>
    )
}
