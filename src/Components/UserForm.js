import {React, useState} from 'react';

import { addUser } from '../actions/userActions';
import { connect } from 'react-redux'

 function UserForm(props) {
    const [state, setState] = useState({
        username: "",
        email: "",
        country: "",
        password: ""
    })
    
    function handleonChange(event){
        setState({...state,
            [event.target.name]:event.target.value
        });
    }

    function handleonSubmit(){
        let userId = 10000 + Math.random()*10000000;
        let user = {...state, id: userId}
        props.addNewUser(user)

    }



    return (
        <div>
            <div>
                <label className="">Username</label><br></br>
                <input type="text" value={state.username} name="username" onChange={handleonChange}></input>
            </div>

            <div>
                <label>Email</label><br></br>
                <input type="text" value={state.email}  name="email" onChange={handleonChange}></input>
            </div>

            <div>
                <label>Country</label><br></br>
                <input type="text" value={state.country} name="country" onChange={handleonChange}></input>
            </div>

            <div>
                <label>Password</label><br></br>
                <input type="password" value={state.password} name="password" onChange={handleonChange}></input>
            </div>

            <button type="button" onClick={handleonSubmit}>Create User</button>
        </div>
    )
}

const mapDispatchToProps = {addNewUser: addUser}

export default connect(null, mapDispatchToProps) (UserForm);
