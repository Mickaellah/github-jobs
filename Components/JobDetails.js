import React, {useContext, useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import LeftArrow from '../icons/keyboard_backspace-24px.svg';
import AccessTime from '../icons/access_time-24px.svg';
import Public from '../icons/public-24px.svg';

import {Context} from '../Context';
import {Link} from 'react-router-dom';

export default function JobDetails() {
    const {id} = useParams();
    const {state} = useContext(Context);

    // Find which one are you clicked on to get the description
    const findId = state.data.find(data => data.id === id);

    // Small operation to get hours between two dates.
    let time = new Date().getTime() - new Date(findId.created_at).getTime();
    let result = Math.floor(time / (1000 * 60 * 60 * 24));

    return (
        <section className="job_details">
            <article className="about_job_offer">
                <div className="link_to_go_back">
                    <img src={LeftArrow} alt="Go back" />
                    <Link to="/" className="go_back">Back to search</Link><br />
                </div>
                <h3>How to apply</h3>
                <p>Please email a copy of your resume and online portfilio to <a href="mailto">wes@kasisto.com</a> & CC <a href="mailto">eric@kasisto.com</a></p>
            </article>
            <article key={findId.id} className="details">
                <div className="job_title">
                    <div>
                        <h2>{findId.title}</h2>
                        <div className="accessing_time">
                            <img src={AccessTime} alt="Access time" />
                            <p className="time">{result} hours ago</p>
                        </div>
                    </div>
                
                    <button className="button">{findId.type}</button>
                </div>
                <div className="company">
                    <img src={findId.company_logo} alt="Company logo" />
                    <div className="company_name">
                        <h3>{findId.company}</h3>
                        <div className="public_location">
                            <img src={Public} alt="Publick" />
                            <p>{findId.location}</p>
                        </div>
                    </div>
                </div>
                <p className="description">
                    {findId.description.replace(/<[^>]+>/g, '')}
                </p>
            </article>
        </section>
    )
}
