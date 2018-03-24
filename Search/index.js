import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Input from 'react-toolbox/lib/input/Input';

import './index.css';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ''
        };
    }

    render() {
        this.handleChange = (name, value) => {
            this.setState({...this.state, [name]: value});
        };

        this.handleKeyPress = (event) => {
            const searchParam = this.state.name;
            if (event.key === 'Enter') {
                const url = `/search/${searchParam}`;
                this.setState({}, () => this.props.history.push(url));
            }
        };

        return (
            <Input type='text' icon='search' hint='Search' name='name'
                value={this.state.name} onChange={this.handleChange.bind(this, 'name')}
                onKeyPress={this.handleKeyPress}
            />
        );
    }
}

Search.proptypes = {
    style: PropTypes.object,
    placeholder: PropTypes.string,
    handlers: PropTypes.object
};

export default withRouter(Search);