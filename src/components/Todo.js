import React, { useState } from 'react';
import {db} from '../firebase';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { ListItemText, ListItem, Button } from '@material-ui/core';



function Todo({ input, inprogress, id, updatedTodo }){

  function deleteTodo(){
    db.collection("todo").doc(id).delete();
  }
 
  return(
    <div className="todo-row">
      <ListItem>
      <ListItemText primary={input} secondary={inprogress ? "In Progress" : "Completed"} />
      </ListItem>
      <Button>complete</Button>
      <RiDeleteBin6Fill onClick={deleteTodo} className='delete-icon' />
      </div>
  )       
}

export default Todo