import productReducer from './productReducer';
import counterReducer from './counterReducer';

import { combineReducers } from "redux";

const reducers = combineReducers({
	product: productReducer,
	counter: counterReducer,
});

export default reducers;