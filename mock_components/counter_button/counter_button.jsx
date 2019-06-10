// EXAMPLE OF USING shouldComponentUpdate()

import React from 'react';

class CounterButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 1
        };
    }

    shouldComponentUpdate(nextState, nextProps) {
        if (this.props.color !== nextProps.color) {
            return true; // component will re-render and update
        }
        if (this.state.count !== nextState.count) {
            return true; // component will re-render and update
        }
        return false; // will not re-render
    }

    render() {
        return (
            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
                Count: {this.state.count}
            </button>
        )
    }
}

export default CounterButton;


// If you want to do a “shallow comparison” between all the fields of props and state to determine if the component should update,
// just inherit from React.PureComponent
class CounterButton extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { count: 1 };
    }

    render() {
        return (
            <button
                color={this.props.color}
                onClick={() => this.setState(state => ({ count: state.count + 1 }))}>
                Count: {this.state.count}
            </button>
        );
    }
}