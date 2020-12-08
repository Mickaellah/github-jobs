import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {Context} from '../Context';

const FormStyling = styled.form`
    margin-block-start: 32px;
    label {
        margin-inline-start: 16px;
    }
`;

export default function FullTimeJob() {
    const {state, dispatch} = useContext(Context);
    const [isChecked, setIsChecked] = useState(false);
    // const {checked} = state;
    // console.log(checked);

    function handleSubmit(e) {
        e.stopPropagation();
        setIsChecked(!isChecked);
        const filterArray = state.data.filter(data => data.type === "Full Time");
        console.log(filterArray);

        dispatch({type: "JOBS", job: filterArray});
    }
    return (
        <FormStyling>
            <input type="checkbox" checked={isChecked} onChange={handleSubmit} id="checkbox" />
            <label>Full time</label>
        </FormStyling>
    )
}
