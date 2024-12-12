import React from 'react';
import my_state from './my_state';

class Score extends React.Component {
  
    render() {
        return(
            <>
                <h1 style = {{textAlign: "center"}}>This is the Score Page</h1>
                <h2 style = {{textAlign: "center"}}>{this.props.s_prop}</h2>
                <h2 style = {{textAlign: "center"}}> Your score so far is {my_state.my_score} / {my_state.my_count} </h2>
                <br/>
                <br/>
               
            </>
        );
    }
}

export default Score;