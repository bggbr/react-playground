import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/reducers";
import { increment, decrement } from "./reducers/counterReducer";
import Child from "./components/Child";
function App() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.count);

    return (
        <div className='flex flex-col items-center'>
            <h1>Counter: {count}</h1>
            <div className='grid grid-cols-2 grid-rows-1 gap-x-4 text-white font-bold mt-4'>
                <button className='p-4 bg-emerald-400 rounded-full' onClick={() => dispatch(increment())}>
                    Increment
                </button>
                <button className='p-4 bg-emerald-400 rounded-full' onClick={() => dispatch(decrement())}>
                    Decrement
                </button>
            </div>
            <Child />
        </div>
    );
}

export default App;
