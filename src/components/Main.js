import React, {Component} from 'react';
import * as SignalR from '@aspnet/signalr';

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newMessage: '',
            messages: []
        }

        this.connection = new SignalR.HubConnectionBuilder()
        .withUrl('http://localhost:50208/hub/chat')
        .build();
    }

    componentDidMount() {
        this.setUpConnection()
    }

    setUpConnection = () => {
        this.connection.on('selfConnected',data => {
            console.log(data)
          });
      
          this.connection.on('new_message', data => {
              console.log(data)
          })
      
          this.connection.start()
            .then(() => console.log('Connection established'))
            .catch(err => console.log(err));
    }

    sendMessage = () => {
        this.connection
          .invoke("sendMessage", {from: this.getUsername(), content: this.state.newMessage})
          .catch((err) => console.log(err));
    
        this.setState({
          newMessage: ''
        });
      }

    getUsername = () => {
        return localStorage.getItem('username')
    }

    handleMessageChange = (e) => {
        this.setState({
            newMessage: e.target.value
        })
    }

    render(){
        return(
            <div>
                <h1>
                    {this.getUsername()}
                </h1>
                <div className={"container"}>
                    <input
                    className={"form-control"}
                    placeholder="Type something.."
                    value={this.state.newMessage}
                    onChange={this.handleMessageChange}
                    type="text"/>
                    <button className={"btn btn-warning"} onClick={this.sendMessage}>Send</button>
                </div>
            </div>
        )
    }
}