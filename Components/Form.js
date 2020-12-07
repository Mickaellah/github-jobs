import React from 'react'

export default function Form() {
    return (
        <div className="search_form">
            <form>
                <input type="search" placeholder="Title, companies, expertise" />
                <button type="submit">Search</button>
            </form>
        </div>
    )
}
