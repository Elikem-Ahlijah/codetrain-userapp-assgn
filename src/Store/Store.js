import { createStore, compose, applyMiddleware } from 'redux';

import usersReducer from '../Reducers/usersReducer';
import {getFirebase, reactReduxFirebase, reduxReactFirebase} from 'react-redux-firebase';
import {getFirestore, reduxFirestore}from 'redux-firestore';
import firebase from '../firebase/config';
import thunk from 'redux-thunk';


const store = createStore(usersReducer, compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reduxReactFirebase(firebase),
    reduxFirestore(firebase)
));

export default store;