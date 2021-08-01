export function signup(email, password){
    return async (dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            const user = await firebase
            .auth()
            .createUserWithEmailAndPassword(email, password);
            console.log(user);
        }catch(e){
            console.log(e)
        }
    }
}


export function login (email, password){
    return async (dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            const userCredentials = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
            console.log(userCredentials);
        }catch(e){
            console.log(e)
        }
    }
}

export function logout (){
    return async (dispatch, state, {getFirebase}) => {
        const firebase = getFirebase();
        try {
            await firebase.auth().signOut();
            console.log();
        }catch(e){
            console.log(e)
        }
    }
}