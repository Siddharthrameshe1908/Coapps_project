import { combineReducers } from 'redux';

import auth from './auth';
import workers  from "./workers"

export const reducers = combineReducers({  auth,workers });