import React, { useContext, useEffect } from 'react'
import { Link } from "react-router-dom";
import "./Homepage.css"
import Card from '../../components/Card/Card';
import MenuBar from '../../components/MenuBar/MenuBar';
import { AiOutlineEdit } from 'react-icons/ai'
import { createContext, useState } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from "axios";



const Homepage = () => {

  /**
  useEffect(()=>{
    axios.get("http://localhost:4000/posts/getPosts").then((response)=>{
      console.log(response.data);
    });
  }, [])
*/



  const todoCaption = "This card is my todo page. It is where I can add and show the completed task.";
  const {theme} = useContext(ThemeContext);

  const cardData = [
    {
      id: "todo",
      link: "/todo",
      number: "1",
      title: "My ToDo List",
      caption: todoCaption,
      logo: <AiOutlineEdit />
    },
    {
      id: "Weather",
      link: "/weather",
      number: "2",
      title: "Weather App",
      caption: todoCaption
    },
    {
      id: "store",
      link: "/h",
      number: "3",
      title: "Something",
      caption: todoCaption
    }
  ];
  
  const [cards, setCards] = useState(cardData);

  const handOnDragEnd = (result)=> {
    
    if(!result.destination) return;
    const items = Array.from(cards);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setCards(items);
    
    
    console.log(result);
  }

  //the draggableId in react-beautiful-dnd should always be a string
  //"source" represents the starting location of the draggable item. It contains information about the source droppable and the index of the item within that droppable.
  //"destination" represents the ending location of the draggable item. It contains information about the destination droppable and the index where the item will be dropped within that droppable.
  return (
    
      <DragDropContext onDragEnd={handOnDragEnd}>
     <>
        <div className='homepage' id={theme}>

        <Droppable  droppableId='card' direction='horizontal'>
        {(provided)=>(
            <div className='container'  {...provided.droppableProps} ref={provided.innerRef}>
              {cards.map((card, index) => (
                
                 <div  
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    className="card-div"
                    key={index}
                    >
                    <Card
                    
                    card={card}
                    index={index}
                  />
                  </div>
                 
              ))}
              {provided.placeholder}
            </div>  
      
            )}  
           </Droppable >
            
          </div>
      </>
    
      </DragDropContext>
  )
}

export default Homepage