import React, {useState, useEffect} from 'react';

export default function JobLists() {
    const [jobs, setJobs] = useState([]);
    const API = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

    async function getJobLists() {
        const res = await fetch(API);
        const data = await res.json();
        setJobs(data);
    }

    useEffect(() => {
        getJobLists();
    }, [])
    return (
        <div>
            {jobs.map(job => {
                let time = new Date(job.created_at);
                
                return (
                    <div key={job.id} className="job_card">
                        <img src={job.company_logo} alt="Company logo" />
                        <div className="content">
                            <h3>{job.company}</h3>
                            <p>{job.title}</p>
                            <button className="button" type="button">{job.type}</button>
                            <div className="location">
                                <p>{job.location}</p>
                                <span>{time.toLocaleTimeString('it-IT')}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
