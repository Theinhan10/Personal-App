import React, {useState} from 'react'
import axios from "axios"
import { useTodoContext } from './useTodoContext';

export const useGetTodos = (successToast, failToast) => {
   const [success, setSuccess] = useState();
  const {dispatch} = useTodoContext();

    const getAllTodos = async()=>{
        await axios
      .get(`http://localhost:4000/todo/getTodos`)
      .then((response) => {
        // dispatch is used to update state object.
        // Pass in an object as arg and the object should have a type property which is a string in all caps that describes in words the state change that we want to make.
        // Second property is the payload property which represents any data we need to make this change. In this case it would be an array of times objects.
        // When we call this dispatch function, in turn our timesReducer function is invoked
        // and it passes the action into the reducer function so it can do its thing and update the state using the info and data.
        dispatch({ type: "SET_TODO", payload: response.data }); // payload is the full array of times we get back from the server
        console.log("We got all of the todos!");
      })
      .catch(function (error) {
        console.log("There was an error getting all the todos: " + error);
        setSuccess(false);
      });
    };

    const addTodo = async(task, Time, Date)=>{
      await axios
      .post(`http://localhost:4000/todo/addTodo`,{
        task: task,
        Date: Date,
        Time: Time
      })
      .then((response) => {
        //const json = JSON.stringify(response.data.msg);

        if (response.statusText === "OK") {
          //console.log("we added todo")
          dispatch({ type: "CREATE_TODO", payload: response.data.todo});
          successToast(response.data.msg);
          setSuccess(true);
        }else{
          failToast("There was an error adding the Todo");
        }
        
      })
      .catch(function (error) {
        console.log("There was an error getting all the adding: " + error);
        setSuccess(false);
      });
    }

    const deleteTodo = async(id)=>{
      await axios
      .delete(
        `http://localhost:4000/todo/deleteTodo/${id}`
      )
      .then((response) => {
        if (response.statusText === "OK") {
          dispatch({ type: "SET_TODO", payload: response.data.todo});
          //console.log("successfully deleted Todo");
          setSuccess(true);
          successToast(response.data.msg);
        }else{
          failToast("There was an error deleting the todo");
        }
      })
      .catch(function (error) {
        console.log("There was an error getting all the todos: " + error);
        setSuccess(false);
      });
    }

    return {getAllTodos, addTodo, success, deleteTodo};
};