import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';



function Todo({ input, completeTodo, removeTodo, updatedTodo }){
 
  return(
    <div className="todo-row">
        <p>{input}</p>
      </div>
  )       
}

export default Todo