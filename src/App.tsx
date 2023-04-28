import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Header from "./components/common/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/counter' element={<Counter />} />
                <Route path='/todo' element={<Todo />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
