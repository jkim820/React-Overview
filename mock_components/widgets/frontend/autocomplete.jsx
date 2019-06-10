import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputValue: ""
        };

        this.handleInput = this.handleInput.bind(this);
        this.selectName = this.selectName.bind(this);
    }


    handleInput(event) {
        this.setState({ inputValue: event.currentTarget.value });
    }

    matches() {
        const matches = [];
        if (this.state.inputValue.length === 0) {
            return this.props.names;
        }
        // return list of all names if there are no input values

        this.props.names.forEach(name => {
            const sub = name.slice(0, this.state.inputValue.length);
            if (sub.toLowerCase() === this.state.inputValue.toLowerCase()) {
                matches.push(name);
            }
        });

        if (matches.length === 0) {
            matches.push('No matches');
        }

        return matches;
    }

    selectName(event) {
        const name = event.currentTarget.innerText;
        this.setState({ inputValue: name });
    }

    render() {
        const results = this.matches().map((result, i) => {
            return ( <li key={i} onClick={this.selectName}>{result}</li> );
        });
        return (
            <div>
                <h1>Autocomplete</h1>
                <div className='auto'>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInput}
                        placeholder='Search...' />
                    <ul>
                        <ReactCSSTransitionGroup
                            transitionName='auto' // the name that's used to create all of the transition classes
                            transitionEnterTimeout={500} // Specifies how long (in ms) the transition should last when the element enters the page
                            transitionLeaveTimeout={500}> {/* Same as above, except for when an element is leaving the page */}
                            {results}
                        </ReactCSSTransitionGroup>
                        {/* names will fade in and out when entering/leaving the page  */}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Autocomplete;