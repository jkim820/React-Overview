import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        };
    }

    onClick = () => {
        this.setState((prevState, props) => {
            return ({ counter: prevState.counter + 1 })
        }, () => console.log('callback ' + this.state.counter))
        console.log('after ' + this.state.counter)
    }


    render() {
        return (
            <button onClick={this.onClick}>Click Me!</button>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// Console
// "after: 0"
// "callback: 1"


// Passing setState a function gives us two benefits.
// 1. It allows us to take a static copy of our state that will never change on its own. 
// 2. It will queue the setState calls so they run in order.
