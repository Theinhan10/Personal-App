import React, {useState} from 'react'
import "./SingleTodo.css"
import { AiOutlineEdit } from 'react-icons/ai';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const SingleTodo = ({todo, index, openModal, deleteTodo}) => {
    
  const handleEditButton =()=>{
      openModal();
    }

  const deleteSingleTodo =(e)=>{
    e.preventDefault();
    deleteTodo(todo.id);
  }

  return (
    <div className='singleTodo'>
        <div className='checkbox-todo'>
            <label className="checkbox-btn">
            <label htmlFor="checkbox"></label>
            <input id="checkbox" type="checkbox" />
            <span className="checkmark"></span>
            </label>
        </div>

        <div className='task-todo'>
            <h2>{todo.task}</h2>
            <span>{todo.Time}, {todo.Date}</span>
        </div>

        <div className='edit-delete'>
            <span onClick={handleEditButton}>
            <AiOutlineEdit size={27}/>
            </span>
            
            <span onClick={deleteSingleTodo}>
            <RiDeleteBin5Fill size={27}/>
            </span>
        </div>
    </div>
  )
}

export default SingleTodo