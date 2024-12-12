import React from 'react';

const Button = ({ label, onClick }) => { 
    return ( 
        <button onClick={onClick} style={{ padding: '10px 20px', 
            color: 'darkblue', // for styling the buttons individually (not related to the page as a whole)
            fontFamily: "Georgia", 
            cursor: "pointer", 
            fontSize: '16px',
            fontWeight: 'bolder',
            margin: '5px' }}> 
            {label} 
        </button> 
    ); 
}; 

export default Button;