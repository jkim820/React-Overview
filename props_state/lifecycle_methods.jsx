// Component Lifecycle = 
// they’re created (mounted on the DOM), 
// they experience growth (by updating), 
// they die (unmounted from the DOM).

//  Broken down into four parts:
//      Initialization
//      Mounting
//      Updating
//      Unmounting


// INITIALIZATION
// In this phase, our component will be setting its state & props, usually done inside a constructor method
// EXAMPLE BELOW:

class Initialize extends React.Component {
    constructor(props) {
        // calling the constructor of its parent
        super(props);
        // initialization process
        this.state = {
            time: new Date(),
            selectedStatus: false
        };
    }
}


// MOUNTING
// This is when our React component “mounts” on the DOM (its created and inserted into the DOM).
// This is when our component renders for the first time.

// * componentDidMount() ->
// This method is called after the component is mounted on the DOM.

// * UNSAFE_componentWillMount() (deprecated) ->
// This method is called just prior to component mounting on the DOM (or when the render method is called). 
// Then our component gets mounted.
// EXAMPLE BELOW:

class LifeCycle extends React.Component {
    componentWillMount() {
        console.log('Component will mount!')
    }
    componentDidMount() {
        console.log('Component did mount!')
        this.getData();
    }
    getData = () => {
        /* method to make an api call for data */
    }
    render() {
        return (
            <div>
                <h1>Mounting methods in action!</h1>
            </div>
        );
    }
}


// UPDATING
// After the mounting phase where our component is created, we enter the update phase. 
// This is where component’s state changes and thus, RE-RENDERING takes place.
// The data of the component (its state & props) will update in response to user events such as clicking, typing, etc. 

// ** shouldComponentUpdate() -> 
// This method determines whether the component should be updated or not. By default, it’ll return true.
// USE CASES of shouldComponentUpdate():
// 1. If you want to re-render the component on a condition.
// 2. If you want to only re-render your component when there is a change in prop. 
// It receives arguments like nextProps and nextState.
// which help us decide whether to re-render by doing a comparison with the current prop value.
// *** This method will help optimize performance and runtime in React.

// * componentWillUpdate() -> 
// CALLED before re-rendering our component. Called once after shouldComponentUpdate().
// USE CASES of componentWillUpdate():
// If you want to perform a calculation before re-rendering the component & after updating the state and prop, then you would use this method.
// It receives arguments like nextProps and nextState.

// * componentDidUpdate() -> 
// CALLED after re-rendering our component.
// After the updated component gets updated on the DOM, the componentDidUpdate() method executes.
// // It receives arguments like prevProps and prevState.

// EXAMPLE BELOW:

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date(),
            selectedStatus: false,
            list: []
        };
    }
    componentWillMount() {
        console.log('Component will mount!')
    }
    componentDidMount() {
        console.log('Component did mount!')
        this.getList();
    }
    getList = () => {
        /* method to make an api call for data */
        fetch('https://api.mydomain.com')
            .then(response => response.json())
            .then(data => this.setState({ list: data }));
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state.list !== nextState.list
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component will update!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component did update!')
    }
    render() {
        return (
            <div>
                <h1>Mounting methods in action!</h1>
            </div>
        );
    }
}


// UNMOUNTING
// Where our component gets unmounted from the DOM.

// * componentWillUnmount() -> 
// CALLED before the unmounting takes place.
// Before the removal of the component from the DOM, componentWillUnMount() will execute.