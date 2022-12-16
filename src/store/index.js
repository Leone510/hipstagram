import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from "redux-thunk";
import authReducer from './auth/reducer';
import currentUserReducer from './currentUser/reducer';
import fakeDBReducer from './fakeDB/reducer';

const rootReducer = combineReducers({
   auth: authReducer,
   currentUser: currentUserReducer,
   fakeDB: fakeDBReducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;