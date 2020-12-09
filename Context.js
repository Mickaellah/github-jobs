import React, {useEffect, useReducer} from 'react'

function reducer(state, action) {
    switch (action.type) {
        case "LOADING": {
            return {
                ...state,
                data: action.data,
                loading: false
            }
        }
        case "JOBS": {
            return {
                ...state,
                data: action.job
            }
        }
    }
}

const Context = React.createContext();

export default function ContextProvider({children}) {
    const initialState = {
        loading: true,
        data: [],
        search: '',
        job: [],
        checked: false
    }
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const API = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

    useEffect(() => {
        dispatch({type: "LOADING"})
        fetch(API, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => {
                dispatch({type: "LOADING", data: data});
            });
    }, []);

    return (
        <Context.Provider value={{state, dispatch}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};
