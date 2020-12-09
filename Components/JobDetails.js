import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {Context} from '../Context';
import {Link} from 'react-router-dom';

export default function JobDetails() {
    const {id} = useParams();
    const {state} = useContext(Context);

    const findId = state.data.find(data => data.id === id);

    return (
        <section className="job_details">
            <article className="about_job_offer">
                <Link to="/" className="go_back">Back to search</Link><br />
                <h3>How to apply</h3>
                <p>Please email a copy of your resume and online portfilio to <a href="mailto">wes@kasisto.com</a> & CC <a href="mailto">eric@kasisto.com</a></p>
            </article>
            <article key={findId.id} className="details">
                <div className="job_title">
                    <div>
                        <h2>{findId.title}</h2>
                        <p>{findId.created_at}</p>
                    </div>
                
                    <button className="button">{findId.type}</button>
                </div>
                <div className="company">
                    <img src={findId.company_logo} alt="Company logo" />
                    <div className="company_name">
                        <h3>{findId.company}</h3>
                        <p>{findId.location}</p>
                    </div>
                </div>
                <p className="description">
                    {findId.description.replace(/<[^>]+>/g, '')}
                </p>
            </article>
        </section>
    )
}
