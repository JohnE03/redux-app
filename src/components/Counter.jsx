import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
//import { useEffect, useCallback } from 'react';
import {increase, decrease} from '../store/index'

function Counter() {
  const dispatcher = useDispatch(); //no need to import store and use store.dispatch
  const globalState = useSelector((state) => state); //now globalState is an object with counter and showCounter properties

  //no need to use useSelector twice

  // const state = useSelector((state) => {
  //   if(state.counter<=0) return 0;
  //   return state.counter;
  // });

  // const state2 = useSelector((state) => state.showCounter);

  // const increaseHandler = () => {
  //   const action = {
  //     type: 'increase',
  //     payload: 1
  //   }
  //   dispatcher(action);
  // }

  // const decreaseHandler = () => {
  //   const action = {
  //     type: 'decrease',
  //     payload: -1
  //   }
  //   dispatcher(action);
  // }


  // const counterHandler = useCallback((type, payload) => {
  //   const action = {
  //     type: type,
  //     payload: payload
  //   }
  //   dispatcher(action);
  //   // or dispatcher({type, payload}); (ES6 syntax)
  // }, [dispatcher]);

  // useEffect(() => {
  //   console.log("useEffect fired");
  //   counterHandler("increase", 5);
  // }, [counterHandler]);

  // const toggleCounter = () => {
  //   const action = {
  //     type: 'toggle',
  //     payload: !globalState.showCounter
  //   }
  //   dispatcher(action);
  // }

  // const handleNegative = (state) => {
  //   if(state < 0) {
  //     return "NAN, <0";
  //   }
  //   return state;
  // }

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      <div className="counter">Counter: {globalState.counter}</div>
        <div>
          <button id="increase" onClick ={ () => dispatcher(increase(5)) }>increase +</button>
          <button id="decrease" onClick ={ () => dispatcher(decrease(-4)) }>decrease -</button>
        </div>
      
      <div>
        <button className='btn'>Hide/Show counter number</button>
      </div>
    </div>
  );
}

export default Counter
