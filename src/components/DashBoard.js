import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class DashBoard extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className=" container">
                
                    <p style = {{textAlign:"center"}}>You are logged in</p>
                </div>
            </div>
        );
    }
}

export default withRouter(DashBoard);