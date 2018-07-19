import React, {Component} from 'react';

export default class Main extends Component {

    getUsername = () => {
        return localStorage.getItem('username')
    }

    render(){
        return(
            <div>
                <h1>
                    main component here
                </h1>
                <h1>
                    {this.getUsername()}
                </h1>
            </div>
        )
    }
}