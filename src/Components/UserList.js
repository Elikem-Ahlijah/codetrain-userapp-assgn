import React from 'react';
import UserItem from './UserItem';


function Userlist (props){
    return(
        <div>
        
        {props.allUsers.map((user) => (
          <UserItem delete={props.delete} user={user} />
        ))}
      </div>
    );
}


export default Userlist;