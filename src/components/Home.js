import React, { Component } from 'react';
import Header from './Header';
import { withRouter } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <Header></Header>
               
                <p style = {{textAlign:"center"}}>HOME</p>
            </div>
        );
    }
}

export default withRouter(Home);