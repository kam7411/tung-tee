import React from 'react';
import './Login.css';

function Welcome(props) {

    return <h1>Logged In.</h1>

}

function Login(props) {

    return (
        <div className='Login-box'>
            <label for="fname">Username</label>
            <br></br>
            <input type="text" className="Login-input" name="username" placeholder="Username" required></input>
            <br></br>
            <label for="fname">Password</label>
            <br></br>
            <input type="password" name="password" placeholder="Password" required></input>
            <br></br>
            <button className="Login-button" onClick={login}>Login</button>
        </div>
    )
}

function login(props) {

    props.isLoggedin = true;
    
}

function Greeting(props) {
    const isLoggedin = props.isLoggedin;

    if (isLoggedin) {
        return < Welcome />
    }

    return < Login />

}



export default Greeting;