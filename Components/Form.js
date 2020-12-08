import React, {useContext, useState} from 'react';
import {Context} from '../Context';

export default function Form() {
    const {state, dispatch} = useContext(Context);
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);

        // let companies = []

        state.data.map(job => {
            let companies = job.company;
            console.log(companies);
        });


        const filterArray = state.data.filter(job => job.toLowerCase().includes(title));
        console.log(filterArray);

        dispatch({type: "JOBS", job: filterArray});
    }

    return (
        <div className="search_form">
            <form onSubmit={handleSubmit}>
                <input type="search" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title, companies, expertise" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
