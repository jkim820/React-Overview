import React from 'react';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ""
        };
    }


    handleInput(event) {
        this.setState({ inputVal: event.currentTarget.value });
    }

    render() {
        
    }
}

export default Autocomplete;