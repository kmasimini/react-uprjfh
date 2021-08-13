import React, { useState } from 'react';
import {db} from '../firebase';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';
import { ListItemText, ListItem, Button } from '@material-ui/core';



function Todo({ input, inprogress, id, updatedTodo }){

  function deleteTodo(){
    db.collection("todo").doc(id).delete();
  }

  function editTodo(){
   db.collection("todo").doc(id).update({
       
   })
  }

  function toggleInProgress(){
    db.collection("todo").doc(id).update({
      inprogress: !inprogress
    })
  }
 
  return(
    <div className="todo-row">
      <ListItem>
      <ListItemText primary={input} secondary={inprogress ? "In Progress" : "Completed"} />
      </ListItem>
      <Button onClick={toggleInProgress}>{inprogress ? "Done" : "UnDone"}</Button>
      <RiDeleteBin6Fill onClick={deleteTodo} className='delete-icon' />
      <FiEdit onClick={editTodo} className='delete-icon' />
      </div>
  )       
}

export default Todo