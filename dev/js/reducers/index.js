import {combineReducers} from 'redux';
import Login from './loginReducer';
import User from './userReducer';

const globalReducers = combineReducers({
    login: Login,
    user: User
});

export default globalReducers;
