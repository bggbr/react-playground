import { KeyboardEvent, useState } from "react";
import { useDispatch } from "react-redux";

export default function AddTask() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const addTodos = () => {
        if (!text) {
            alert("Please input a value");
            return;
        }
        dispatch({ type: "ADD", payload: { text } });
        setText("");
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            addTodos();
        }
    };

    return (
        <div>
            <input
                type='text'
                value={text}
                className='p-1 border-solid border-black border-b-2 mr-4'
                onKeyDown={handleKeyDown}
                onChange={(e) => setText(e.target.value)}
            />
            <button className='min-w-[60px] p-1 border-solid border-2 border-black rounded-2xl' onClick={addTodos} >
                ADD
            </button>
        </div>
    );
}
