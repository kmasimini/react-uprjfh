import React, {useState, useEffect, useRef} from 'react';
import './todo.css';
import {db} from '../firebase';
import Todo from './Todo'


function Dashboard(){
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  const handleChange = e => {
    setInput(e.target.value)
  }
  
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus();
    getTodos();
  },[]); //  blank to only run on first launch

  function getTodos(){
    db.collection("todo").onSnapshot(function(querySnapshot){
       setTodos(
         querySnapshot.docs.map((doc) => ({
        id: doc.id,
        input: doc.data().input,
       }))
       );
    })
  }

function addTodo(e) {
    e.preventDefault()
    
    db.collection('todo').add({
      input: input,
    });
     
   
    setInput('');
  }
  
    return(
   
         <div>
         <form id="to-do-form" className="todo-form">
           
           <>
           <input type="text" placeholder="Add Task"  value={input} name='text' className='todo-input'
           onChange={handleChange}
           ref={inputRef}
           />
           <button className="todo-button" type="submit"onClick={addTodo}>Add</button>
           </>
        
           </form>
             
           {todos.map((input) =>(
             <Todo
              input={input.input}
              id={input.id}
              />
           ))}

       </div>
       
       
    );

}
export default Dashboard;