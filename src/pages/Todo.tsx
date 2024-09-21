import { useState } from "react";
import Link from "next/link";
import styles from "../styles/todo.module.css";

type Todo = {
    id: number;
    text: string;
};

const TodoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState<string>("");


    const addtodo = () => {
        if (newTodo.trim() === "") return;
        const newTodoItem: Todo = {id: Date.now(), text: newTodo};
        setTodos([newTodoItem, ...todos]);
        setNewTodo(""); 
        };

        const deleteTodo = (id:number) => {
            setTodos(todos.filter(todo => todo.id !== id));
        };

        return (
            <div className={styles.page}>
                <h1>Todo List</h1>

                <main className={styles.main}>
                    <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    />
                    
                    <button onClick={addtodo}>Add Todo</button>
                 </main>
                 <ul>
                    {todos.length === 0 ? (
                        <p>No todos</p>
                    ) : (
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {todo.text} <button onClick={()=> deleteTodo(todo.id)}>Delete</button>
                        </li>
                    )))}
                 </ul>

                 <Link href="/">   
                 <h2>Go back to homepage</h2>
                 <hr />
                 </Link>
            </div>
        )
    }

    export default TodoList;