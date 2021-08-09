import React, {useState, useEffect, useRef} from 'react';
import './todo.css';
import {db} from '../firebase'


function Dashboard(props){
  const [input, setInput] = useState(props.edit ? props.edit.value
    : '');
  const handleChange = e => {
    setInput(e.target.value)
  }
  
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()

  })

  const handleSubmit = e => {
    e.preventDefault()
    
    db.collection('todo').add({
      input: input,
    })
     
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
     text: input
  })
    setInput('');
  }
  
    return(
   
         <div>
         <form id="to-do-form" className="todo-form" onSubmit={handleSubmit}>
           {props.edit ? (
           <>
           <input type="text" placeholder="Update your todo"  value={input} name='text' className='todo-input edit'
           onChange={handleChange}
           ref={inputRef}
           />
           <button className="todo-button edit" type="submit">Update</button>
           </>
           ) :
           (
           <>
           <input type="text" placeholder="Add Task"  value={input} name='text' className='todo-input'
           onChange={handleChange}
           ref={inputRef}
           />
           <button className="todo-button" type="submit">Add</button>
           </>
           )
           }

           </form>
        
       </div>
       
       
    );

}
export default Dashboard;