import './App.css';
import Counter from './components/Counter';
import store from './store/index';
import {Provider} from 'react-redux'; //the one responsible to make App subscribe to the store
// no need to make entire code listen to store, only the components that need the state from store will listen to it

function App() {
  return(
    <Provider store={store} >
      <Counter />;
    </Provider>
  )
}

export default App;
