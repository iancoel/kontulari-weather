import { createStore } from 'redux';
import city from './reducer';

const store = createStore(city);

export default store;
