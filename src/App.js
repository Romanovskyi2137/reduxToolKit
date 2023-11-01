import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementAction, decrementAction } from './vanillaRedux/reducer';
import { toolkitDecr, toolkitIncr } from './toolkit/toolkitReducer';


function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  return (
    <div className="App">
      <div>
        <h1>counter: {counter}</h1>
        <button 
          style={{marginRight: "15px"}}
          // onClick={() => dispatch(incrementAction())}
          onClick={() => dispatch(toolkitIncr())}
        >
          increment
        </button>
        <button
        // onClick={() => dispatch(decrementAction())}
        onClick={() => dispatch(toolkitDecr())}
        >
          decrement
        </button>
      </div>     
    </div>
  );
}

export default App;
