import { useDispatch } from "react-redux";
import { increment } from "../reducers/counterReducer";
import Button from "./common/Button";
export default function Child() {
    const dispatch = useDispatch();

    const incrementNumber = () => {
        dispatch(increment());
    };

    return <Button name='Child Button' onClick={incrementNumber} />;
}
