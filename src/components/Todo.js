import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';



function Todo({ todos, completeTodo, removeTodo, updatedTodo }){
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  
  const submitUpdate = value => {
    updatedTodo(edit.id, value)
    setEdit({
    id: null,
    value: ''  
  })
  }

  if (edit.id){
    return <Dashboard edit={edit} onSubmit={submitUpdate}/>;
  }

  return todos.map((input, index) => (
    <div className={input.isComplete ? 'todo-row complete' :
     'todo-row'} key={index}>
       
       <div key={input.id} onClick={() => completeTodo(input.id)}>
          {input.input}
         </div>
           <div className="icons">
             <RiCloseCircleLine  
               onClick={() => removeTodo(todo.id)}
               className="delete-icon"
             />
            
             <TiEdit
              onClick={() => setEdit({id: todo.id, value: todo.text})}
              className="edit-icon"
             />
             </div>
       </div>
  ))
}

export default Todo