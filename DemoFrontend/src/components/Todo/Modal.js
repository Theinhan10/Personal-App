import React,{useState} from 'react'
import TaskForm from './TaskForm'
import "./TaskForm.css"


const Modal = ({cancelModal}) => {
    
const [cancelButton, setCancelButton] = useState(true);

  return (
    <div className='modalBackground'>
        <TaskForm cancelButton={cancelButton} cancelModal={cancelModal}/>
    </div>
  )
}

export default Modal