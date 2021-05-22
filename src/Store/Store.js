import { createStore } from 'redux';

import usersReducer from '../Reducers/usersReducer';


export const store = createStore(usersReducer)