import React, { useContext, useState, useEffect } from 'react'
import "./Todo.css"
import { IoMdDoneAll } from 'react-icons/io';
import SingleTodo from '../components/Todo/SingleTodo';
import TaskForm from '../components/Todo/TaskForm';
import { ThemeContext } from '../Context/ThemeContext';
import axios from "axios"
import { useGetTodos } from '../hooks/useGetTodos';
import { useTodoContext } from '../hooks/useTodoContext';
import Modal from '../components/Todo/Modal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Todo = () => {
    const successToast=(msg)=>{
        toast.success(msg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
    
      const failToast=(msg)=>{
        toast.error(msg, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
    
    const {theme} = useContext(ThemeContext);

    const {todos} = useTodoContext();
    const {getAllTodos, success, addTodo, deleteTodo} = useGetTodos(successToast, failToast);

    const [modalOpen, setModalOpen] = useState(false);

    const openModal =()=>{ 
        setModalOpen(true);
    }
    const cancelModal =()=>{ 
        setModalOpen(false);
    }

    
  useEffect(()=>{
    getAllTodos();
    if(success){
        getAllTodos();
    }
  }, [success]) 


  return (
    <>

        <div className='todo' id={theme}>
            <div className='TodoList'>
                <TaskForm addTodo={addTodo} />
            </div> 

            <div className='TodoList'>
            {modalOpen ? (
        <Modal cancelModal={cancelModal}/>
        ) : (
                <div>
                    <h1>Current Task</h1>
                    {todos && todos.map((todo, index)=>(
                        <SingleTodo deleteTodo={deleteTodo} key={index} todo={todo}  openModal={openModal} />
                    ))}
                </div>
                
                )}
                <button className='addTaskButton'>
                    <span className='buttonSpan'> <IoMdDoneAll size={15}/> </span>
                    <span className='buttonSpan'> Done </span>
                </button>
 
            </div>    
           

            <div className='TodoList'>
                <h1>Completed Tasked</h1>
            </div>    

        </div>
        
        <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    </>
  )
}

export default Todo