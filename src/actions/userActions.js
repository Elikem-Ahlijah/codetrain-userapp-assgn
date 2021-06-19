import { getFirestore } from "redux-firestore";

export function getAllUsers(){
    return (dispatch, state, {getFirestore})=>{
        const db = getFirestore()
        db.collection('users')
        .get()
        .then((results)=>{
            let users = [];
            results.forEach((doc)=>{
                users.push(doc.data())
            })
            dispatch({type:'ADD_ALL_USERS', payload:users})
            
        })
        
            
    
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function addUser(newUser){
    return (dispatch, state, {getFirestore})=>{
        console.log(newUser)
        const db = getFirestore()
        db.collection('users')
        .add(newUser)
        .then(()=>{
            dispatch({type:'ADD_USER', payload: newUser})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    
    
}

export function deleteUser (newUser){
    return {type: 'DELETE_USER', payload: newUser}
}

export function updateUser (id, updatedUser){
    return {type: 'UPDATE_USER', payload: {id:id, updatedUserInfo:updatedUser}}
}