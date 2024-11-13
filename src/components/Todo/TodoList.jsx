import React, { useState } from 'react'
import { MdCheck, MdClear, MdDeleteForever } from "react-icons/md";

const TodoList = ({ tasks, setTasks, handleCheckEvent}) => {

    const handleCheck = (_id) => {
        handleCheckEvent(_id);
    }
    const handleDelete = (_id) => {
        const newTasks = tasks.filter((currEle) => currEle.id !== _id);
        setTasks(newTasks);
    }

    return (
        <div className='myUnOrdList'>
            <ul className='todo-list'>
                {
                    tasks.map((list) =>
                        <li className='todo-item' key={list.id}>
                            <span className={`${list.checked ? 'checkList' : 'notCheckList'}`}>{list.task}</span>
                            <button className={`${list.checked ? 'delete-btn' : 'check-btn'}`} onClick={() => handleCheck(list.id)}>
                                {list.checked ? <MdClear /> : <MdCheck />}
                            </button>
                            <button className='delete-btn' onClick={() => handleDelete(list.id)}>
                                <MdDeleteForever />
                            </button>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default TodoList
