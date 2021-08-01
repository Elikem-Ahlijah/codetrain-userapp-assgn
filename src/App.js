import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import display from './pages/display';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute exact path="/" component={display}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={Signup}/>
      </Switch>
    </BrowserRouter>
      
    
  )
}

export default App
