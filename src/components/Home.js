import React, { Component } from 'react';
import Header from './Header';

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

export default Home;