import React from "react";
import logo from '../logo.svg';
import '../App.css';

class Hello extends React.Component {
    render() {
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div> Hello from {this.props.firstName} {this.props.lastName} </div>
                    <div>First React App</div>
                </header>
            </div>

        ); 
    }
}

export default Hello;