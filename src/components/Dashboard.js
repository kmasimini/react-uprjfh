import React, {useState, useEffect, useRef} from 'react';
import './todo.css'


function Dashboard(props){
  const [input, setInput] = useState('');
  const handleChange = e => {
    setInput(e.target.value)
  }

  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
     text: input
  })
    setInput('');
  }
  
    return(
   
         <div>
         <form id="to-do-form" className="todo-form" onSubmit={handleSubmit}>
           <input type="text" placeholder="Add Task"  value={input} name='text' className='todo-input'
           onChange={handleChange}
           ref={inputRef}
           />
           <button className="todo-button" type="submit">Add</button>
           </form>
        
       </div>
       
       
    );

}
export default Dashboard;