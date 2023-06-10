import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

const Card = ({card, index}) => {

  //{...provided.dragHandleProps}: The handle props are used to define a specific part of the component that users can click and drag to initiate the dragging action. 
  //{...provided.draggableProps}: These props include attributes like style, onMouseDown, onKeyDown, and others, which handle the dragging behavior of the component.
  //ref={provided.innerRef}: It enable the Draggable component to manage and interact with the DOM node of the <form>.
  //snapshot contain many properties to style the draggabel component.
  return (
  
  <Draggable key={card.id} draggableId={card.id} index={index} >

{(provided, snapshot) => (
    <div className={`card ${snapshot.isDragging ? "dragCardColor" : ""}`}
    {...provided.draggableProps}
    ref={provided.innerRef}
    {...provided.dragHandleProps}
    >
    <div className='box'>
       <div className='content'>
        {/** 
            <h2>{number}</h2>
            <h2>{logo}</h2>
        */}

          {/* <h3 className='loader'>{title}</h3> */}
          
          <div class="loader">
            <div data-glitch="Loading..." className="glitch">{card.title}</div>
          </div>

            <p>
              {card.caption}
            </p>
            <Link to={card.link}>
                <h4 className='link'>Click Me!</h4>
            </Link>
       </div>
    </div>
    </div>
    )}
    </Draggable>
  )
}

export default Card