import { combineReducers } from 'redux';

import BankManagementReducer from '../src/views/Header/BankManagementReducer';
import LoginReducer from '../src/views/LoginReducer'


export default combineReducers({

    bankManagement: BankManagementReducer,
    loginReducer: LoginReducer

});