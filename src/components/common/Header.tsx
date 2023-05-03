import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="flex justify-between p-4">
            <p className="font-bold text-4xl">
                <Link to="/">LOGO</Link>
            </p>
            <ul className="grid grid-rows-1 grid-cols-4 gap-x-4 text-center font-bold">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/counter">Counter</Link>
                </li>
                <li>
                    <Link to="/todo">Todo</Link>
                </li>
                <li>
                    <Link to="/query">Query</Link>
                </li>
            </ul>
        </nav>
    );
}
