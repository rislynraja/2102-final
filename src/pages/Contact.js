import React from 'react';


import "../index.css";
import MyComponent from './MyComponent';

class Contact extends React.Component {

    greeting(name) {
        alert("Greeting " + name);
    };

    hello(name) {
        alert("Hello " + name);
    }
    

    render() {
        return(
            <>
            <div>
                <br />
                <div style={{textAlign: 'center'}}>
                    <h1  className="text-3xl font-bold underline">Greetings!</h1>
                    <button style={{ padding: '5px 10px', 
                        color: 'darkblue', 
                        fontFamily: "Georgia", 
                        cursor: "pointer", 
                        fontSize: '14px',
                        fontWeight: 'bolder',
                        margin: '5px' }} onClick={() => this.greeting('CSE 2102 Class')}>Say Hello</button>
                    <br />
                </div>
            </div>
            <MyComponent />
            </>
        );
    }
}

export default Contact;