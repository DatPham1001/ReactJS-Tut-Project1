import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import Auth from './Auth';

class Login extends Component {
    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.state = {
            name: '1',
            password: '2'
        };
    }
    onLogin() {
        const { history } = this.props;
        if (this.refs.name.value === this.state.name & this.refs.password.value === this.state.password) {
            history.push('/dashboard');
        } else { alert('Wrong username or password') }

    }


    render() {
        return (
            <div>
                <Header></Header>
                <div className="col-lg-12">
                    <div className="user-login-container">
                        <div style={{ width: '100%' }}>
                            <input ref="name" type="text" class="login-bar" placeholder="Username (type 1)"></input>
                        </div>
                        <div style={{ width: '100%' }}>
                            <input ref="password" type="text" class="login-bar" placeholder="Password (type 2)"></input>
                        </div>
                        <div style={{ width: '100%' }}>
                            <button className="sign-btn" onClick={this.onLogin}>
                                Sign in
                            </button>
                            <button onClick={() => Auth.login(() => {
                                this.props.history.push("/dashboard")
                            })}
                            >
                                Login test
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);