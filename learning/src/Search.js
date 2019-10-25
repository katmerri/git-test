import React from 'react';

const Search = props => {

    const onSubmit = (event) => {
        event.preventDefault();
        props.onFormSubmit();
    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Search Jokes"
                onChange={event => props.onSearchValueChange(event.target.value)} />

            <button disabled={props.isSearching}>Search</button>
            <button onClick={props.onSingleSearch} disabled={props.isSearching}>Feeling Lucky</button>
        </form>
    );
};

export default Search;