import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ' '};
    }

    onInputChange(event){
        this.setState({
            term: event.target.value
        });
        console.log(event.target.value);
    }

    onFormSubmit(event){
        event.preventDefault();
    }

    render(){
        return(
            <form 
                className="input-group mb-3"
                onSubmit={ this.onFormSubmit }
            >
                <input 
                    type="text"
                    className="form-control"
                    placeholder="Enter a city name for the forecast"
                    value={ this.state.term }
                    onChange={ (event) => this.onInputChange(event) }
                />
                <span className="input-group-btn">
                    <button 
                        type="submit"
                        className="btn btn-secondary"
                    >Search</button>
                </span>
            </form>
        );
    }
}

export default SearchBar