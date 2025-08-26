import {createStore} from 'redux';

const initState = {
  counter: 0,
  showCounter: true
};

const counterReducer = (state = initState, action) => {
    if (action.type === 'increase') {
        return {
        ...state,
        counter: state.counter + action.payload
        };
    }
    if (action.type === 'decrease') {
        return {
        ...state,
        counter: state.counter + action.payload
        };
    }
    if (action.type === 'toggle') {
        return {
        ...state,
        showCounter: action.payload
        };
    }
    //console.log(state);
  return state;
}

const store = createStore(counterReducer);

export default store;