import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import authReducer from './auth/reducer';
import currentUserReducer from './currentUser/reducer';

const rootReducer = combineReducers({
   auth: authReducer,
   currentUser: currentUserReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;