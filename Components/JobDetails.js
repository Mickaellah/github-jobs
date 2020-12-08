import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {Context} from '../Context';
import {Link} from 'react-router-dom';

export default function JobDetails() {
    const {id} = useParams();
    const {state} = useContext(Context);
    const [job, setJob] = useState([]);

    const API = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";

    async function getSingleJob() {
        try {
            const res = await fetch(API + id);
            const newJob = await res.text();
            setJob(newJob);
        } catch(e) {
            console.error(e);
        }
    }

    useEffect(() => {
        getSingleJob();
    }, [id]);

    if (!job.title) return null;

    return (
        <div>
            {job.map(job => {
                <article key={job.id}>
                    <h2>{job.title}</h2>
                    <p>{job.description}</p>
                </article>
            })}
        </div>
    )
}
