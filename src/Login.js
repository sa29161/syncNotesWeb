import React from 'react';
import fire from './config/fire.js';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoginCSS from './config/LoginCSS.css';

class Login extends React.Component{

    signUp() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().createUserWithEmailAndPassword(email, password)
          .then((u) => {
            console.log('Successfully Signed Up');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }
    
      login() {
        const email = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;
        fire.auth().signInWithEmailAndPassword(email, password)
          .then((u) => {
            console.log('Successfully Logged In');
          })
          .catch((err) => {
            console.log('Error: ' + err.toString());
          })
      }

    render() {
        return (
            <div className="user-form">
            <div className="login-form" style={{ textAlign: 'center' }}>
                <img src="https://www.freelogodesign.org/file/app/client/thumb/78c5dee8-04dd-44a1-a851-8abe807920ab_200x200.png?1611543788336"/>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className="input" id="email" style = {{width: '20%', left: '40%', position: 'relative'}} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control id="password" style = {{width: '20%', left: '40%', position: 'relative'}} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                </Form>
                <Button variant="dark" style={{ margin: '10px' }} onClick={this.login}>Login</Button>
                <Button variant="secondary" style={{ margin: '10px' }} onClick={this.signUp}>Sign Up</Button>
            </div>
            </div>
   
     
        )


    }
}

export default Login;