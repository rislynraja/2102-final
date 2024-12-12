import React from 'react';


class NoPage extends React.Component {

    render() {
        return(
            <>
                <h1 style = {{color: "red", textAlign: "center"}}>This is a 404 error !</h1>
                <h2 style = {{color: "blue", textAlign: "center"}}>Yipes</h2>
            </>
        );
    }
}

export default NoPage;