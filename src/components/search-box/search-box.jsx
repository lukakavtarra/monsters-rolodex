import React, { Component } from 'react'
import './search-box.styles.css'
class SearchBox extends Component {
    render() {
        const { onSearchHandler } = this.props;
        const { placeholder } = this.props;
        const { className } = this.props;

        return (
            <input
            className = { className }
            type='search'
            placeholder = { placeholder }
            onChange={ onSearchHandler }
          /> 
        )
    }
}

export default SearchBox