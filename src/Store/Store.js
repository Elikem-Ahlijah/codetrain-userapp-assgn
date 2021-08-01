import { createStore, compose, applyMiddleware, combineReducers } from "redux";

import usersReducer from "../Reducers/usersReducer";
import { getFirebase, reduxReactFirebase, firebaseReducer } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import firebase from "../firebase/config";
import thunk from "redux-thunk";

const allReducers = combineReducers({
  userState: usersReducer,
  firebaseState: firebaseReducer
})



const store = createStore(
  allReducers,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
  )
);

export default store;
