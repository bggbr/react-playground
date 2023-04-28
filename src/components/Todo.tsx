import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";

type Props = { id: string; text: string; onCompleted: boolean };
export default function Todo({ id, text, onCompleted }: Props) {
    const [isChecked, setIsChecked] = useState(false);
    const [isChanged, setIsChanged] = useState(false);
    const [editText, setEditText] = useState("");

    const inputFocus = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    useEffect(() => {
        if (isChanged && inputFocus.current) {
            inputFocus.current.focus();
        }
    }, [isChanged]);

    const handleChecked = () => {
        setIsChecked(!isChecked);
        dispatch({ type: "EDIT", payload: { id, text, onCompleted: !isChecked } });
    };

    const onEdit = () => {
        if (!editText) {
            alert("Please input a value");
            return;
        }
        setEditText("");
        dispatch({ type: "EDIT", payload: { id, text: editText, onCompleted } });
        setIsChanged(!isChanged);
    };

    const onCancle = () => {
        setEditText("");
        setIsChanged(!isChanged);
    };

    const onDelete = () => {
        dispatch({ type: "DELETE", payload: { id } });
    };

    return (
        <div className='w-full border-solid border-b-2 border-black p-2 mb-4'>
            <ul>
                <li className='flex justify-center items-center'>
                    <input
                        type='checkbox'
                        checked={onCompleted}
                        onChange={handleChecked}
                        className='appearance-none border-solid border-2 border-black w-4 h-4 rounded-full checked:bg-emerald-500'
                    />
                    {isChanged ? (
                        <input
                            ref={inputFocus}
                            type='text'
                            placeholder='Enter task'
                            className='grow pl-1 h-full'
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                        />
                    ) : (
                        <p className='grow pl-1 text-center'>{text}</p>
                    )}

                    {isChanged ? (
                        <div>
                            <button className='min-w-[60px] p-1 border-solid border-2 border-black rounded-2xl' onClick={onEdit}>
                                OK
                            </button>
                            <button className='min-w-[60px] p-1 border-solid border-2 border-black rounded-2xl' onClick={onCancle}>
                                Cancle
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button
                                className='mr-1 min-w-[60px] p-1 border-solid border-2 border-black rounded-2xl'
                                onClick={() => setIsChanged(!isChanged)}
                            >
                                Edit
                            </button>
                            <button className='min-w-[60px] p-1 border-solid border-2 border-black rounded-2xl' onClick={onDelete}>
                                Delete
                            </button>
                        </div>
                    )}
                </li>
            </ul>
        </div>
    );
}
