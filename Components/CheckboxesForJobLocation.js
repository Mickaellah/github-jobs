import React, {useState, useContext} from 'react';
import styled from 'styled-components';

import {Context} from '../Context'; 

const FormStyling = styled.form`
    margin-block-start: 32px;
    fieldset {
        border: none;
        display: flex;
        padding-inline: 0;
    }
    label {
        margin-inline-start: 16px;
    }
`;

export default function CheckboxesForJobLocation() {
    const {state, dispatch} = useContext(Context);
    const [isChecked, setIsChecked] = useState(false);

    function handleUnitedState(e) {
        setIsChecked(e.target.isChecked)

        const filterArr = state.data.filter(job => job.location === "United States");
        console.log(filterArr);
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleIndia(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "India");
        console.log(filterArr);
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleNewYork(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "New York City");
        console.log(filterArr);
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleBerlin(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "Berlin");
        console.log(filterArr);
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleDresden(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "Dresden");
        console.log(filterArr);
        dispatch({type: "JOBS", job: filterArr});
    }

    function handleBarcelona(e) {
        setIsChecked(e.target.isChecked);

        const filterArr = state.data.filter(job => job.location === "Barcelona");
        console.log(filterArr);
        dispatch({type: "JOBS", job: filterArr});
    }

    return (
        <FormStyling>
            <fieldset>
                <input type="checkbox" value={isChecked} onChange={handleUnitedState} />
                <label>United States</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" value={isChecked} onChange={handleIndia} />
                <label>India</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" value={isChecked} onChange={handleNewYork} />
                <label>New York</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" value={isChecked} onChange={handleBerlin} />
                <label>Berlin</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" value={isChecked} onChange={handleDresden} />
                <label>Dresden</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" value={isChecked} onChange={handleBarcelona} />
                <label>Barcelona</label>
            </fieldset>
        </FormStyling>
    )
}
