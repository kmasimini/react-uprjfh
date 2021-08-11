import React, { useState } from 'react';
import {db} from '../firebase';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { ListItemText, Button } from '@material-ui/core';



function Todo({ input, completeTodo, id, updatedTodo }){

  function deleteTodo(){
    db.collection("todo").doc(id).delete();
  }
 
  return(
    <div className="todo-row">
      <ListItemText primary={input} />
      <RiCloseCircleLine onClick={deleteTodo} className='delete-icon' />
      </div>
  )       
}

export default Todo