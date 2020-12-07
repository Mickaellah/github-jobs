import React, {useEffect, useReducer} from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "LOADING": {
            return {
                ...state,
                loading: true
            }
        }
        case "JOBS": {
            return {
                ...state,
                data: action.data
            }
        }
    }
}

const Context = React.createContext();

export default function ContextProvider({children}) {
    const initialState = {
        loading: false,
        data: []
    }
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const API = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

    useEffect(() => {
        dispatch({type: "LOADING"})
        fetch(API)
            .then(response => response.json())
            .then(data => {
                dispatch({type: "JOBS", data: data});
            });
    }, [API])


    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};
