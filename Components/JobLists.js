import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {Context} from '../Context';

export default function JobLists() {
    const {state} = useContext(Context);

    return (
        <div>
            {state.data.map(job => {
                let time = new Date(job.created_at);
                return (
                    <div key={job.id} className="job_card">
                        <img src={job.company_logo} alt="Company logo" />
                        <div className="content">
                            <Link to={`/job/${job.url}`}>
                                <h3>{job.company}</h3>
                            </Link>
                            <p>{job.title}</p>
                            <button className="button" type="button">{job.type}</button>
                            <div className="location">
                                <p>{job.location}</p>
                                <span>{time.toLocaleTimeString('it-IT')}</span>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}
