import '../App.css';
import UserForm from '../Components/UserForm';
import Userlist from '../Components/UserList';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import { logout } from '../actions/authActions';

function Display(props) {
    function handleLogout(){
        props.logout()
    }
  
  return (
    <div className="container-flex App">
        
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      <div className="row form">
        <div className="col-md-6">
        <button type="button" style={{ backgroundColor: 'red', color: 'white' }} onClick={handleLogout}>
            Logout
        </button>
          <UserForm />
        </div>
        <div className="col-md-6">
          <Userlist />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {logout}

export default connect(null, mapDispatchToProps) (Display);
