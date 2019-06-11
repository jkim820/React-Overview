// The Power Of Not Mutating Data
// Avoid mutating values that you are using as props or state

// WRONG
handleClick() {
    // This section is bad style and causes a bug
    const words = this.state.words;
    words.push('marklar');
    this.setState({ words: words });
}

// CORRECT
handleClick() {
    this.setState(state => ({
        words: state.words.concat(['marklar'])
    }));
}



function updateColorMap(colormap) {
    return Object.assign({}, colormap, { right: 'blue' });
}