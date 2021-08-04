import '../App.css'
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/authActions';
import {Link, Redirect} from 'react-router-dom';

function Login(props) {
    const [credentials, setCredentials] = useState({email:'', password:''})
    console.log(props.auth)
    
    function handleonChange(event){
        setCredentials({...credentials, [event.target.name]:event.target.value })}

    function handleonSubmit (){
        props.login(credentials.email, credentials.password)
    }


    
    //if firebase isLoaded is false
    //show loading
    if(props.auth.isLoaded === false){
        <h1>Loading...</h1>
    }

    //if a user is logged in
    //redirect them to display

    if(props.auth.isEmpty ===false){
        return <Redirect path='/'/>

    }
    return (
        <div className='container-flex App form'>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
           <div>
                <label>Email</label><br></br>
                <input type="text" name="email" onChange={handleonChange}></input>
            </div>
            <div>
                <label>Password</label><br></br>
                <input type="password" name="password" onChange={handleonChange}></input>
            </div>

            <button onClick={handleonSubmit}>Log in</button> 
        </div>
    )
}

const mapDispatchToProps = {login}

const mapStateToProps =(state)=>{
    return {
        auth: state.firebaseState.auth,
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Login);
