import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Axios() {
    const [state, setState] = useState('');
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        try {
            const response = await axios.get("http://localhost:3000/todo");
            setTodo(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function handleInputChange(event) {
        setState(event.target.value);
    }

    async function addTodo() {
        if (!state.trim()) {
            console.error("Todo name cannot be empty");
            return;
        }
        try {
            const response = await axios.post("http://localhost:3000/todo", { name: state });
            setTodo(prevTodo => [...prevTodo, response.data]);
            setState('');
        } catch (error) {
            console.error("Error adding todo:", error);
        }
    }

    async function deleteTodo(id) {
        try {
            await axios.delete(`http://localhost:3000/todo/${id}`);
            setTodo(prevTodo => prevTodo.filter(item => item.id !== id));
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    }

    async function editTodo(id, newName) {
        try {
            const response = await axios.put(`http://localhost:3000/todo/${id}`, { name: newName });
            setTodo(prevTodo =>
                prevTodo.map(item => (item.id === id ? { ...item, name: response.data.name } : item))
            );
        } catch (error) {
            console.error("Error editing todo:", error);
        }
    }

    return (
        <div>
            <h1>Axios</h1>
            <input type="text" placeholder='Enter name' value={state} onChange={handleInputChange} />
            <button onClick={addTodo}>Add Todo</button>
            {
                todo.map((el, i) => (
                    <div key={i}>
                        <h1>{el.name}</h1>
                        <button onClick={() => deleteTodo(el.id)}>Delete</button>
                        <button onClick={() => editTodo(el.id, prompt("Enter new name:"))}>Edit</button>
                    </div>
                ))
            }
        </div>
    );
}
