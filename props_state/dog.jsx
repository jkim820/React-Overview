class Dog extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>Name: {this.props.name}, Breed: {this.props.breed}</div>
        );
    }
}

export default Dog;

// In the example above, a new instance of the Dog component is passed name and breed properties, 
// which can be read inside the component as this.props.breed and this.props.name.

// HTML render: <div>Name: Fido, Breed: Greyhound</div>