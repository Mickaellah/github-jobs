import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import {Context} from '../Context';

export default function JobLists() {
    const {state} = useContext(Context);
    let {data} = state;

    return (
        <>
            {state.loading && <h2>Loading...</h2>}
            {!state.loading && state.data && (
                <div>
                    {data.map(job => {
                        let time = new Date(job.created_at);
                        return (
                            <Link to={`/${job.url}`} key={job.id}>
                                <div className="job_card">
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
                            </Link>
                        )
                    })
                    }
                </div>
            )}
        </>
    )
}
