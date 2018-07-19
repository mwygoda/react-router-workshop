import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import {isUserLoggedIn} from './Autorization';

export default function WithAutorization (ComposedComponent) {
    return class Autorization extends Component {
        
        render() {
            console.log(isUserLoggedIn())
            if(isUserLoggedIn()) {
                return(
                    <ComposedComponent {...this.props}/>
                )
            }
            return (
                <Redirect to="/login"/>
            )
        }
    }
}