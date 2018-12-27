import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends React.Component {

    propTypes = {
        children: PropTypes.element.isRequired
    };
    
    render () {
        const children = this.props.children;
        return (
            <div>
                { children }
            </div>
        );
    }
}

class Greeting extends React.Component {
    defaultProps = {
        name: 'Stranger'
    }
    render () {
        return (
            <h1>Hello, {this.props.name}</h1>
        )
    }
}

ReactDOM.render(
    <Greeting name={'234567'} />,
    document.getElementById('root')
)
