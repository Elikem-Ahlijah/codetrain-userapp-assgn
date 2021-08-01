import React, {useEffect} from 'react';
import UserItem from './UserItem';

import { connect } from 'react-redux';
import { getAllUsers } from '../actions/userActions';


function Userlist (props){
  useEffect(()=>{
    props.getAllUsers()
  }, [])


    return(
        <div>
        
        {props.usersData.map((user) => (
          <UserItem  user={user} />
        ))}
      </div>
    );
}


function mapStateToProps (state) {
  return {usersData: state.userState.users}
}

const mapDispatchToProps = {
  getAllUsers,
}


export default connect(mapStateToProps, mapDispatchToProps) (Userlist);