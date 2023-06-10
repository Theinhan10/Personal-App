import React, { useContext, useState } from 'react'
import "./TaskForm.css"
import { ThemeContext } from '../../Context/ThemeContext'



const TaskForm = ({cancelModal, cancelButton, addTodo}) => {
    const {theme} = useContext(ThemeContext);
    //const {getAllTodos, addTodo, success} = useGetTodos();

    const [task, setTask] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

    const taskSubmit = async (e) => {
      e.preventDefault(); //used to stop the default behavior of an event and allows you to handle the event in a custom way using JavaScript code.
      addTodo(task, time, date);
      setTask("");
      setTime("");
      setDate("");
    }

    const handleCancel =()=>{
      cancelModal();
    }
    

  return (
    <form className={`colorful-form ${theme === 'light' ? 'light-mode' : ''}` } onSubmit={taskSubmit} >

      <div className="form-group">
        <label className="form-label" htmlFor="name">Add Task:</label>
        <input  placeholder="Enter your Task" value={task} className="form-input" type="text" onChange={(e)=> setTask(e.target.value)}/>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="name">Due Date:</label>
        <input value={time} className="form-input" type="time" onChange={(e) => setTime(e.target.value)}/>
        <input value={date} className="form-input" type="date" onChange={(e) => setDate(e.target.value)}/>
      </div>

      {cancelButton ? (
        <div className='editModalButton'>
          
          <button className="cancel-button" onClick={handleCancel}>
            <span>Cancel</span>
          </button>

        <button className="cssbuttons-io-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
            <span>Update</span>
        </button>
        </div>
    
        ):(
          <button className="cssbuttons-io-button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
            <span>Add</span>
        </button>
      )}
        

    </form>
  )
}

export default TaskForm