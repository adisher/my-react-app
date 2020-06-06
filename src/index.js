import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi(props) {
    return (
        <div>
            <strong>Hello from {props.name}</strong>
            <h1>Adil</h1>
            <h6>Adil</h6>
            {5 + 10}
        </div>
    );

}

ReactDOM.render(<Hi name="index.js"/>, document.querySelector('#root'));


