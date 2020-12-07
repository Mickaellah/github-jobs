import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';

import {Context} from '../Context';
import {Link} from 'react-router-dom';

export default function JobDetails() {
    const {url} = useParams();
    const {state} = useContext(Context);

    const findId = state.data.filter(job => job.url === url);
    console.log(findId);

    return (
        <div>
            {findId.map(job => {
                return (
                    <p>
                        {job.description}
                    </p>
                )
            })}
            
        </div>
    )
}
