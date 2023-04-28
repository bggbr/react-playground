import { useSelector } from 'react-redux';
import { RootState } from './store/reducers';

function App() {
    const count = useSelector((state: RootState) => state.counter.count);

    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
}
Q;
export default App;
