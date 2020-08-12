import React, { Component } from 'react';
import Auth from './Auth';
import Header from './Header';

class Login extends Component {
    constructor(props) {
        super(props);
        // this.onLogin = this.onLogin.bind(this);
        this.state = {
            name: '',
            password: ''
        };
    }
    checkAuth() {
        this.props.history.push("/products");
    };
    render() {
        return (
            <div>
                <Header></Header>
                <div className="col-lg-12">
                    <div className="user-login-container">
                        <div style={{ width: '100%' }}>
                            <input type="text" class="login-bar"
                                placeholder="Username (type 1)" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })}></input>
                        </div>
                        <div style={{ width: '100%' }}>
                            <input type="text" class="login-bar"
                                placeholder="Password (type 2)" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}></input>
                        </div>
                        <div style={{ width: '100%' }}>
                            <button className="sign-btn" onClick={() => {
                                Auth.login(this.state.name, this.state.password); this.checkAuth()
                            }}>
                                Sign in
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;