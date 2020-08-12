
class Auth {
    constructor() {
        this.authenticated = false;
        this.state = {
            name: '1',
            password: '2'
        }
    }
    login(name, password) {
        if (name === this.state.name & password === this.state.password) {
            this.authenticated = true;
            console.log(this.authenticated);
            // this.props.history.push("/products");

        } else { alert('Wrong username or password') }


    }
    logout() {
        this.authenticated = false;

    }
    isAuthenticated() {
        return this.authenticated;
    }
    
}
export default new Auth();