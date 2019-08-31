import { combineReducers } from "redux";
import {firestoreReducer} from 'redux-firestore'
import AuthReducer from './AuthReducer'
import ProjectReducer from './ProjectReducer'
import {firebaseReducer} from 'react-redux-firebase'

const RootReducer=combineReducers({
Auth:AuthReducer,
Project:ProjectReducer,
firestore:firestoreReducer,
firebase:firebaseReducer
})
export default RootReducer