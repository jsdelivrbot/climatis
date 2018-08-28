import React, { Component } from 'react';


class SearchBar extends Component {
    render(){
        return(
            <form className="input-group mb-3">
                <input type="text"  className="form-control" placeholder="Enter a city name"/>
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}

export default SearchBar