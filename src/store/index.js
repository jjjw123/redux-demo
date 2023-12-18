import { legacy_createStore } from 'redux';
import todoReducer from './reducers';

// 创建Redux store
const store = legacy_createStore(todoReducer);

export default store;

