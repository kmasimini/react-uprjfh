import React, { useState } from 'react';
import Dashboard from './Dashboard';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';



function Todo({ todos, completeTodo }){
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  return todos.map((todo, index) => {
    <div className={todo.isComplete ? 'todo-row isComplete' :
     'todo-row'} key={index}>
       
       <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
         </div>
           <div className="icons">
             <RiCloseCircleLine />
             <TiEdit/>
             </div>
       </div>
  })
}

export default Todo