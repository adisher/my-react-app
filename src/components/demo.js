import React from 'react';
import ReactDOM from 'react-dom';

function Hi() {
    return <div>Hello from demo.js</div>;
}

ReactDOM.render(<Hi />, document.querySelector('#root'));

export default Hi;
