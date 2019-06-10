import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import AutoComplete from './autocomplete';

const names = [
    'Abba',
    'Barney',
    'Barbara',
    'Jeff',
    'Jenny',
    'Sarah',
    'Sally',
    'Xander'
];

function Root() {
    return (
        <div>
            <Clock />
            <div className='interactive'>
                <AutoComplete names={names} />
            </div>
        </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('main'));
});