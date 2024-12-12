import React from 'react';
import { Outlet, useNavigate } from "react-router-dom";
// import { Link, Outlet } from "react-router-dom"; // swapped Link with useNavigate

import Button from './Button';

const Home = () => { // switched to a function instead of a class
    const n = useNavigate(); // usenavigate is raising an error when called in the button so putting it in a const first

    return ( 
        <> 
            <h1 style = {{textAlign: "center"}}>This is the HOME stubb</h1> 
            <div style = {{display: 'flex', // for styling the buttons relative to the page
                justifyContent: 'center', 
                alignItems: 'center', 
                gap: '10px',
                flexDirection: 'row'}}>
                <Button label="Quiz" onClick={() => n('/Quiz')} /> 
                <Button label="Score" onClick={() => n('/Score')} /> 
                <Button label="Contact Us" onClick={() => n('/Contact')} /> 
                <Button label="Tab Example" onClick={() => n('/TabExample')} /> 
            </div>
            <Outlet /> 
        </> 
    ); 
};

export default Home;