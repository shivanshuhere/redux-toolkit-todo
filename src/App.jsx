import { Provider } from "react-redux";
import "./App.css";
import { store } from "./app/store";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
function App() {
    return (
        <div className="flex justify-center place-items-center flex-col h-screen bg-blue-700">
            <Provider store={store}>
                <h2 className="text-4xl text-white font-mono font-semibold uppercase">
                    Redux toolkit todo
                </h2>
                <AddTodo />
                <TodoItem />
            </Provider>
        </div>
    );
}

export default App;
