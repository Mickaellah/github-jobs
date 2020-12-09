import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import {Context} from '../Context';

const FormStyling = styled.form `
    margin-block-start: 32px;
    label {
        text-transform: uppercase;
    }
    input {
        padding: 12px;
        margin-block-start: 16px;
    }
`;



export default function SearchForLocation() {

    const {state, dispatch} = useContext(Context);
    const [city, setCity] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setCity(e.target.value);

        const jobCity = state.data.filter(job => { 
            if (!city) return undefined;
            return job.location.toLowerCase().includes(city.toLowerCase());
        });

        console.log(jobCity);

        dispatch({type: "JOBS", job: jobCity});
    }
    return (
        <FormStyling>
            <label>Location</label>
            <input type="search" value={city} onChange={(e) => handleSubmit(e)} id="search" placeholder="City, state, zip code or country" />
        </FormStyling>
    )
}
