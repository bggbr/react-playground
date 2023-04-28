import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import { increment, decrement } from "../reducers/counterReducer";
import CounterChild from "../components/CounterChild";
import Button from "../components/common/Button";

export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state: RootState) => state.counter.count);
    return (
        <div className='flex flex-col items-center'>
            <h1>Counter: {count}</h1>
            <div className='grid grid-cols-2 grid-rows-1 gap-x-4 text-white font-bold mt-4'>
                <Button name='Increment' onClick={() => dispatch(increment())} />
                <Button name='Decrement' onClick={() => dispatch(decrement())} />
            </div>
            <CounterChild />
        </div>
    );
}
