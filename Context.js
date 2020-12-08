import React, {useEffect, useReducer, useState} from 'react'

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
    const [jobs, setJobs] = useState([]);
    const [ state, dispatch ] = useReducer(reducer, initialState);
    const API = "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?";

    let {data, job} = state;

    useEffect(() => {
        dispatch({type: "LOADING"})
        fetch(API)
            .then(response => response.json())
            .then(data => {
                dispatch({type: "LOADING", data: data});
            });
    }, []);

    function handleChange(e) {
        let {data} = state;
        const filteredArray = data.map(job => {
            return job;
        }).filter(job => {
            return job.company.toLowerCase() === e.target.value;
        });
        setJobs(e.target.value);
        dispatch({type: "JOBS", data: filteredArray});
    }

    function FilterJobTitle(e) {
        e.preventDefault();
        dispatch({type: "JOBS", data: job});
    }

    return (
        <Context.Provider value={{state, dispatch, jobs, FilterJobTitle, handleChange}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context};
