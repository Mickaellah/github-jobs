import React, {useContext} from 'react';
import styled from 'styled-components';
import {Context} from '../Context';

const FormStyling = styled.form`
    margin-block-start: 32px;
    label {
        margin-inline-start: 16px;
    }
`;


export default function FullTimeJob() {
    const {state} = useContext(Context);
    return (
        <FormStyling>
            <input type="checkbox" id="checkbox" />
            <label>Full time</label>
        </FormStyling>
    )
}
