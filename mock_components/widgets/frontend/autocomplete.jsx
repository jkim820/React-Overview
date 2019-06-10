import React from 'react';

class Autocomplete extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            inputVal: ""
        };

        this.handleInput = this.handleInput.bind(this);
        this.selectName = this.selectName.bind(this);
    }


    handleInput(event) {
        this.setState({ inputVal: event.currentTarget.value });
    }

    matches() {
        const matches = [];
        if (this.state.inputVal.length === 0) {
            return this.props.names;
        }
        // return list of all names if there are no input values

        this.props.names.forEach(name => {
            const sub = name.slice(0, this.state.inputVal.length);
            if (sub.toLowerCase() === this.state.inputVal.toLowerCase()) {
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
        this.setState({ inputVal: name });
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
                        value={this.state.inputVal}
                        onChange={this.handleInput}
                        placeholder='Search...' />
                    <ul>
                        <ReactCSSTransitionGroup
                            transitionName='auto'
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}>
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