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
// ----------

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
    // ** this.setState() used to schedule updates to the component local state
    tick() {
        this.setState({
            date: new Date()
        });
        // correct way to modify state and re-render
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

// 1. When <Clock /> is passed to ReactDOM.render(), React calls the constructor of the Clock component. 
// Since Clock needs to display the current time, it initializes this.state with an object including the current time.
// 2. React then calls the Clock component’s render() method. This is how React learns what should be displayed on the screen. 
// React then updates the DOM to match the Clock’s render output.
// 3. When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method. 
// Inside it, the Clock component asks the browser to set up a timer to call the component’s tick() method once a second.
// 4. Every second the browser calls the tick() method. Inside it, the Clock component schedules a UI update by calling setState() with an object containing the current time. 
// Thanks to the setState() call, React knows the state has changed, and calls the render() method again to learn what should be on the screen. 
// This time, this.state.date in the render() method will be different, and so the render output will include the updated time. React updates the DOM accordingly
// 5. If the Clock component is ever removed from the DOM, 
// React calls the componentWillUnmount() lifecycle method so the timer is stopped.