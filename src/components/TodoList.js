import React, { useState } from 'react'
import Dashboard from './Dashboard'

function TodoList() {
   const [todos, setTodos] = useState([])
   
   const addTodo = todo => {
     if(!todo.text || /^\s*$/.test(todo.text)){
       return
     }

     const newTodos = [todo,...todos]

     setTodos(newTodos);
   }

  return (
    <div>
       <Dashboard onSubmit={addTodo} />
      </div>
  )
}

export default TodoList