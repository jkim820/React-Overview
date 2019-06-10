import React from 'react';
import ReactDOM from 'react-dom';

import AutoComplete from './auto';

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
            <div className='interactive'>
                <AutoComplete names={names} />
            </div>
        </div>
    );
}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Root />, document.getElementById('main'));
});