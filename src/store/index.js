import {createSlice, createStore} from '@reduxjs/toolkit';

const initState = {
  counter: 0
};

//createSlice is a function that accepts a slice name, an initial state and an object full of reducer functions
const counterSlice = createSlice({ //must use these keys (can't change their names)
    name: "counter", //indicates which slice of state we are managing
    initialState: initState,
    reducers: {
      increase: (state, action)=>{state.counter += action.payload},
      decrease: (state, action)=>{state.counter += action.payload}
    }
});

// const counterReducer = (state = initState, action) => {
//     if (action.type === 'increase') {
//         return {
//         ...state,
//         counter: state.counter + action.payload
//         };
//     }
//     if (action.type === 'decrease') {
//         return {
//         ...state,
//         counter: state.counter + action.payload
//         };
//     }
//     if (action.type === 'toggle') {
//         return {
//         ...state,
//         showCounter: action.payload
//         // or showCounter: !state.showCounter (don't pass a payload to dispatcher)
//         };
//     }
//     //console.log(state);
//   return state;
// }

const store = createStore(counterSlice.reducer); //pass the reducer
export const {increase, decrease} = counterSlice.actions; //automatically generated action creators based on the reducers defined inside createSlice
export default store;