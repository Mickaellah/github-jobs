import React from 'react';
import styled from 'styled-components';

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
    return (
        <FormStyling>
            <fieldset>
                <input type="checkbox" />
                <label>London</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" />
                <label>Amsterdam</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" />
                <label>New York</label>
            </fieldset>
            <fieldset>
                <input type="checkbox" />
                <label>Berlin</label>
            </fieldset>
        </FormStyling>
    )
}
