import { RootState } from "../store/reducers";

import { useSelector } from "react-redux";
import AddTask from "./AddTask";
import Todo from "./Todo";

export default function TodoList() {
    const tasks = useSelector((state: RootState) => state.todo);

    return (
        <section className='flex flex-col items-center w-1/2 mx-auto'>
            <h1 className='text-4xl font-bold my-10'>To-do List</h1>
            {tasks.map((todo) => (
                <Todo key={todo.id} id={todo.id} text={todo.text} onCompleted={todo.onCompleted} />
            ))}

            <AddTask />
        </section>
    );
}
