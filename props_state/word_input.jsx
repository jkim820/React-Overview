class WordInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            word: ''
        };
        this.updateWord = this.updateWord.bind(this);
    }

    updateWord(event) {
        this.setState({ word: event.currentTarget.value });
    }

    render() {
        return (
            <div>
                <input onChange={this.updateWord} value={this.state.word} />
                <span>The word is: {this.state.word}</span>
            </div>
        );
    }
}

// When it is rendered, we register an event listener on the input via its onChange prop.
// Whenever the input changes its value (via user input), it will call onChange, which in this case 
// is set to this.updateWord which has been bound to ensure this is still our component when it is eventually invoked.
// That function, called a change handler, calls this.setState() and sets this.state.word to the input's current value.
// The component then re-renders with the new state, updating the text inside the span.

// You should always use this.setState() rather than this.state = anywhere outside of your constructor, 
// because this.setState() also re-renders your component, causing it to reflect the new state.


