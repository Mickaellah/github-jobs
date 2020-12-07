import React, {useEffect, useReducer} from 'react'

function reducer(state, action) {
    
}

const Context = React.createContext();
export default function ContextProvider() {
    const [ state, dispatch ] = useReducer(reducer, {
        
    });

    return (
        <div>
            
        </div>
    )
}
