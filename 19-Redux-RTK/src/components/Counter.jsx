import { useDispatch, useSelector } from "react-redux";
import { decreament, increament } from "../app/features/counter/counterSlice";
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    console.log(count)
  return (

    <div>
        <h1>{count}</h1>
        
      <button onClick={() => dispatch(increament())}>+</button>
      <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  );
}

export default Counter;
