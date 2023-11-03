import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, asyncIncrement } from "../toolkit/toolkitSlice";


const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter.counter);
    const asyncIncrement = async () => {
        setTimeout(() => {
        return dispatch(increment())
        }, 2000)
    }
    return (
        <div className="Counter">
        <h1>counter: {counter}</h1>
        <button 
            style={{marginRight: "15px"}}
            onClick={() => dispatch(increment())}
        >
          increment
        </button>
        <button
            style={{marginRight: "15px"}}
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
    )
};

export default Counter