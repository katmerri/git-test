import React, { Component } from 'react';
import Search from './Search';
import './Test.css';

class Test2 extends Component {
    joke = null;

    constructor() {
        super();

        this.state = {
            searchQuery: '',
            jokes: [],
            isLoading: false
        };

        this.onSearchChange = this.onSearchChange.bind(this);
        this.searchJokes = this.searchJokes.bind(this);
    }

    searchJokes(limit = 20) {
        this.setState({ isLoading: true });

        fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchQuery}&limit=${limit}`, {
            method: "GET",
            headers: {
                Accept: "application/json"
            }
        })
        .then(response => response.json())
        .then(json => {
            const jokes = json.results;
            this.setState({
                jokes,
                isLoading: false
            });
        });
    }

    onSearchChange(value) {
        this.setState({ searchQuery: value })
    }

    showJokes() {
        return(
            <ul className="joke__list">
                {this.state.jokes.map(item => <li className="joke" key={item.id}>{item.joke}</li>)}
            </ul>
        )
    }

    render() {
        return(
            <main className="joke__search">
                <h1>Random Dad Jokes</h1>

                <Search
                    onFormSubmit={this.searchJokes}
                    onSearchValueChange={this.onSearchChange}
                    isSearching={this.state.isLoading}
                    onSingleSearch={() => this.searchJokes(1)} />

                <h2>Searching for: {this.state.searchQuery}</h2>

                {this.state.isLoading ? 'Loading...' : this.showJokes()}
            </main>
        );
    }
}

export default Test2;