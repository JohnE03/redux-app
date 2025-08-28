import counterSliceReducer from './counterSlice';
//import {createStore} from 'redux';
import {configureStore} from '@reduxjs/toolkit';

// const store = createStore(counterSliceReducer); //pass the reducer
// createStore can't handle multiple reducers, so if we have multiple slices, we need to use configureStore from @reduxjs/toolkit

const store = configureStore({
    reducer: {counter: counterSliceReducer} //if we have multiple slices, we can add them here
});
export default store;