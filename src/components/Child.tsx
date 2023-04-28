import { useDispatch } from "react-redux";
import { increment } from "../reducers/counterReducer";
export default function Child() {
    const dispatch = useDispatch();

    const incrementNumber = () => {
        dispatch(increment());
    };

    return <button onClick={incrementNumber}>Child</button>;
}
