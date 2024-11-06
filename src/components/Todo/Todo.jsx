import React, { useState } from 'react'
import TodoList from './TodoList'
import "./Todo.css"
import DateTime from "./DateTime"
import { v4 as uuidv4 } from 'uuid';


const reactTodo = "reactTodo"

const Todo = () => {

    const [inputValue, setInputValue] = useState("");

    const [tasks, setTasks] = useState(() => {
        const localData = localStorage.getItem(reactTodo);
        if(!localData) return [];
        return JSON.parse(localData);
    });

    // set data in localstorage
    localStorage.setItem(reactTodo, JSON.stringify(tasks));

    const handleInputChange = (value) => {
        setInputValue(value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!inputValue) return;

        if (tasks.find((currEle) => currEle.task === inputValue)) {
            setInputValue("");
            return;
        }

        setTasks((prevData) => [...prevData, {
            id: uuidv4(),
            task: inputValue,
            checked: false,
        }]);

        setInputValue("");
    }

    const handleCheckEvent = (_id) => {
        const updatedValue = tasks.map((currEle) => {
            if (currEle.id === _id) {
                return { ...currEle, checked: !currEle.checked }
            } else {
                return currEle;
            }
        });
        setTasks(updatedValue);
    }

    const handleClearAll = () => {
        setTasks([]);
    }

    return (
        <section className='todo-container'>
            <header>
                <h1>Todo List</h1>
            </header>
            <DateTime />
            <section className='form'>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <input type="text" className='todo-input' autoCapitalize='off' value={inputValue}
                            onChange={(event) => handleInputChange(event.target.value)} />
                    </div>
                    <div>
                        <button type='submit' className='todo-btn'>Add Task</button>
                    </div>
                </form>
            </section>
            <TodoList tasks={tasks} setTasks={setTasks} handleCheckEvent={handleCheckEvent} />
            <section>
                <button className='clear-btn' onClick={handleClearAll}>Clear All</button>
            </section>
        </section >
    )
}

export default Todo
