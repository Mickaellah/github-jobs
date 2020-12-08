import React, {useContext} from 'react';
import {Context} from '../Context';

export default function Form() {
    const {state, jobs, FilterJobTitle, handleChange} = useContext(Context);

    return (
        <div className="search_form">
            <form onSubmit={FilterJobTitle}>
                <input type="search" value={jobs} onChange={(e) => handleChange(e)} placeholder="Title, companies, expertise" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
