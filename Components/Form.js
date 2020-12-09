import React, {useContext, useState} from 'react';
import {Context} from '../Context';

export default function Form() {
    const {state, dispatch} = useContext(Context);
    const [title, setTitle] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        const companies = state.data.filter(itm => { 
            if (!title) return undefined
            return itm.company.toLowerCase().includes(title.toLowerCase())});

        dispatch({type: "JOBS", job: companies});
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
