export function addUser(newUser){
    return {type:'ADD_USER', payload: newUser}
}

export function deleteUser (newUser){
    return {type: 'DELETE_USER', payload: newUser}
}

export function updateUser (id, updatedUser){
    return {type: 'UPDATE_USER', payload: {id:id, updatedUserInfo:updatedUser}}
}