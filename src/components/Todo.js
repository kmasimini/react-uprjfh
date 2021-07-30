import React, { useState } from 'react'
import Dashboard from './Dashboard'


function Todo(){
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  return todos.map((todo, index) => {
    <div className={todo.isComplete ? 'todo-row isComplete' :
     'todo-row'} key={index}>
       
       <div key={todo.id} onClick={() => isCompleteTodo(todo.id)}>
          {todo.text}
         </div>

       </div>
  })
}

export default Todo