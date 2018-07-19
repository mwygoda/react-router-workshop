import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state={
            username: ''
        }
    }


    handleUsernameChange = e => {
        this.setState({username: e.target.value})
    }

    handleLogin = () => {
         localStorage.setItem('username', this.state.username)
         this.props.history.push("/")
    }

    render() {
        const {username} = this.state;
        return(
            <div className={"container"}>
                <input
                  className={"form-control"}
                  placeholder="Enter username"
                  value={username}
                  onChange={this.handleUsernameChange}
                  type="text"/>
                <button className={"btn btn-warning"} onClick={this.handleLogin}>Login</button>
            </div>
        );
    }
    
}

export default withRouter(Login)
