import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Todo from "./pages/Todo";
import Header from "./components/common/Header";
import Query from "./pages/Query";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/query" element={<Query />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
