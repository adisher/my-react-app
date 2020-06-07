import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Hi({plainFunc}) {
    return (
        <React.Fragment>
            <div>Hello from fragment! No need to use root div element anymore!!</div>
            <div>Hello from {plainFunc}</div>    
        </React.Fragment>
                
    );
}

const MyConst = function({constFunc}) {
    return <div>Hello from {constFunc}</div>;
}

const ArrowConst = ({arrowFunc}) => {
    return <div>Hello from {arrowFunc}</div>;
}

const ParensConst = ({parensFunc}) => (
    <div>Hello from {parensFunc}</div>
)

const OneLineConst = ({oneLineFunc}) => <div>Hello from {oneLineFunc}</div>




ReactDOM.render(
    <>
        <Hi plainFunc="plain function"/>
        <MyConst constFunc="constant holding a function"/>
        <ArrowConst arrowFunc="arrow function"/>
        <ParensConst parensFunc="'without return keyword and replacing curly braces with parens function"/>
        <OneLineConst oneLineFunc="short one line function without return keyword and parens"/>
    </>,

    document.querySelector('#root')
    );


