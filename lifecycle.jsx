class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }; // adding local state to class
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock />,
    document.getElementById('root')
);

// Next, make the Clock set up its own timer and update itself every second.
// Add lifecycle methods to the class.

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000 );
    }
    // The componentDidMount() method runs after the component output has been rendered to the DOM

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    // you are free to add additional fields to the class manually if you need to store something 
    // that doesn’t participate in the data flow (like a timer ID).

    // we will implement a method called tick() that the Clock component will run every second.
    // It will use this.setState() to schedule updates to the component local state
    tick() {
        this.setState({
            date: new Date()
        });
    }


    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}