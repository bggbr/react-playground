import { combineReducers } from "redux";
import counterReducer from "../reducers/counterReducer";
import todoReducer from "../reducers/todoReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
