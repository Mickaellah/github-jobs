import React, {useContext, useState} from 'react';
import {Context} from '../Context';

export default function Form() {
    const {state, dispatch} = useContext(Context);
    const [jobTitle, setJobTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const jobs = state.data.filter(job => { 
            if (!jobTitle) return undefined;
            return job.title.toLowerCase().includes(jobTitle.toLowerCase());
        });

        dispatch({type: "JOBS", job: jobs});
    }

    return (
        <div className="search_form">
            <form onSubmit={handleSubmit}>
                <input type="search" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} placeholder="Title" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
