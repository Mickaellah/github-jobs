import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import AccessTime from '../icons/access_time-24px.svg';
import Public from '../icons/public-24px.svg';

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

                        // Small operation to get the number of hours between two dates.

                        let time = new Date().getTime() - new Date(job.created_at).getTime();
                        let result = Math.floor(time / (1000 * 60 * 60 * 24));

                        return (
                            <Link to={`/${job.id}`} className="link_to_jobDetails" key={job.id}>
                                <div className="job_card">
                                    <img src={job.company_logo} alt="Company logo" />
                                    <div className="content">
                                            <h3>{job.company}</h3>
                                        <p>{job.title}</p>
                                        <button className="button" type="button">{job.type}</button>
                                        <div className="location">
                                            <div className="public_location">
                                                <img src={Public} alt="Public" />
                                                <p>{job.location}</p>
                                            </div>
                                            <div className="accessing_time">
                                                <img src={AccessTime} alt="Access time" />
                                                <span>{result} hours ago</span>
                                            </div>
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
