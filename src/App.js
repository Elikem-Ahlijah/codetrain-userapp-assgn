import './App.css';
import {useState} from 'react'
import UserForm from './Components/UserForm';
import Userlist from './Components/UserList';

function App() {
  
  return (
    <div className="container-flex App">
      <div className="row form">
        <div className="col-md-6">
          <UserForm />
        </div>
        <div className="col-md-6">
          <Userlist />
        </div>
      </div>
    </div>
  );
}

export default App;
