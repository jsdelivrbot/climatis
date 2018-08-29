import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term: ' '};
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render(){
        return(
            <form 
                className="input-group mb-3"
                onSubmit={ (event) => this.onFormSubmit(event) }
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

function mapDispatchToProps(dispatch){
    return bindActionCreators({ fetchWeather }, dispatch);
};


export default connect(null, mapDispatchToProps)(SearchBar);