import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/reducers";
import { increment, decrement } from "./reducers/counterReducer";

function App() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.count);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}

export default App;
