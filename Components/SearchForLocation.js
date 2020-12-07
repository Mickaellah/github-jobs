import React from 'react';
import styled from 'styled-components';

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
    return (
        <FormStyling>
            <label>Location</label>
            <input type="search" id="search" placeholder="City, state, zip code or country" />
        </FormStyling>
    )
}
