import { combineReducers } from 'redux';

import locations from './locations';
import settings from './settings';

const initialState = combineReducers({
    locations,
    settings 
});

export default initialState;