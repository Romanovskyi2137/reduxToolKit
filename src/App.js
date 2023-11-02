import './App.css';
import { useDispatch, useSelector } from 'react-redux';
// import { incrementAction, decrementAction } from './vanillaRedux/reducer';
// import { toolkitDecr, toolkitIncr } from './toolkit/toolkitReducer';
import { increment, decrement } from "./toolkit/toolkitSlice";



function App() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const asyncIncrement = async () => {
    setTimeout(() => {
      return dispatch(increment())
    }, 2000)
  }
  return (
    <div className="App">
      <div>
        <h1>counter: {counter}</h1>
        <button 
          style={{marginRight: "15px"}}
          // onClick={() => dispatch(incrementAction())}
          // onClick={() => dispatch(toolkitIncr())}
          onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
        style={{marginRight: "15px"}}
        // onClick={() => dispatch(decrementAction())}
        // onClick={() => dispatch(toolkitDecr())}
        onClick={() => dispatch(decrement())}
        >
          decrement
        </button>
        <button
          onClick={() => asyncIncrement()}
        >
          async increment
        </button>
      </div>     
    </div>
  );
}

export default App;
