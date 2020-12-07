import React from 'react';
import styled from 'styled-components';
import Form from './Form';

const FormStyling = styled.form`
    margin-block-start: 32px;
    label {
        margin-inline-start: 16px;
    }
`;


export default function FullTimeJob() {
    return (
        <FormStyling>
            <input type="checkbox" id="checkbox" />
            <label>Full time</label>
        </FormStyling>
    )
}
