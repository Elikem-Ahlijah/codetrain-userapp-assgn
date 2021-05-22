import React from 'react';
import UserItem from './UserItem';

import { connect } from 'react-redux'

function Userlist (props){
    return(
        <div>
        
        {props.usersData.map((user) => (
          <UserItem updateUser={props.updateUser} delete={props.delete} user={user} />
        ))}
      </div>
    );
}


function mapStateToProps (state) {
  return {usersData: state.users}
}


export default connect(mapStateToProps) (Userlist);