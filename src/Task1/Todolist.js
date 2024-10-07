import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Todolist = () => {
    const [task, setTask] = useState(''); 
    const [todo, setTodo] = useState([]); 


    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    
    const handleAdd = (e) => {
        e.preventDefault(); 
        if (task.trim()) { 
            setTodo([...todo, { id: uuidv4(), name: task }]);
            setTask(''); 
        }
    };

    
    const handleDelete = (id) => {
        const newTodo = todo.filter((item) => item.id !== id); 
        setTodo(newTodo); 
    };

    return (
        <div className='container col-md-6 p-5'>
            <h2>Todo List</h2>

            <form onSubmit={handleAdd}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter task"
                        value={task}
                        onChange={handleInputChange}
                    />
                </div>
                <button className='btn btn-primary' type="submit">Add Task</button>
            </form>

            <ul className="list-group mt-3">
                {todo.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {item.name} 
                        <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;


