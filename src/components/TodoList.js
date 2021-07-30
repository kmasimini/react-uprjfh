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
       <h1>What's the plan for Today?</h1>
       <Dashboard onSubmit={addTodo} />
      </div>
  )
}

export default TodoList