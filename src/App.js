import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatcher = useDispatch();

  const state = useSelector((state) => {
    if(state.counter<=0) return 0;
    return state.counter;
  });

  const state2 = useSelector((state) => state.showCounter);

  const increaseHandler = () => {
    const action = {
      type: 'increase',
      payload: 1
    }
    dispatcher(action);
  }

  const decreaseHandler = () => {
    const action = {
      type: 'decrease',
      payload: -1
    }
    dispatcher(action);
  }

  const toggleCounter = () => {
    const action = {
      type: 'toggle',
      payload: !state2
    }
    dispatcher(action);
  }

  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {
        state2 &&
        <>
          <div className="counter">Counter: {state}</div>
          <div>
            <button id="increase" onClick={increaseHandler}>increase +</button>
            <button id="decrease" onClick={decreaseHandler}>decrease -</button>
          </div>
        </>
      }
      <div>
        <button className='btn' onClick={toggleCounter}>Hide/Show counter number</button>
      </div>
    </div>
  );
}

export default App;
