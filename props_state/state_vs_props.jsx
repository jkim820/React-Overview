// State vs Props

// Both are objects representing data that the component needs in order to render.

// DIFFERENCES:
// Props are immutable. Once set they can’t be changed.
// State is observable. It can hold data that may change over time.
// Props can be used in either function or class components.
// State is limited to class components.
// Props are set by the parent component.
// State is updated by event handlers.


// Using State
// When using State, we need the state of a component to always exist — 
// so we need to set an initial state.

// class MyClass extends React.Component {
//  constructor(props){
//     super(props);
//     this.state = { attribute: "value" };
//  }
// } 

// Updating State
// * State should never be explicitly updated.
// WRONG -> this.state.attribute = "changed-value";
// CORRECT -> this.setState({attribute: “changed-value”}); -> setState() = built-in React method
// It takes a single parameter and expects an object containing our set of values to be updated.
// The method will update our state and then call the render() method to re-render the page.

// Setting Multiple States
// We’re taking our previous component state and props, as a parameter, and then we’re updating the total

// this.setState((prevState, props) => ({
//     total: prevState.count + props.diff
// }));


// Using Props
// Props are properties of a component that are passed in at the time of initialization (constructor).
// When new props are received by a component, lifecycle methods will be triggered to handle the change 
// and (by default) a re-rendering of the component.