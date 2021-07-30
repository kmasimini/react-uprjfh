import React, {useState} from 'react';
import './todo.css'


function Dashboard(props){
  const [input, setInput] = useState('');
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
     text: input
  })
    setInput('');
  }
  
    return(
      <div className="Dashboard" >
       <header>
         <form id="to-do-form" className="todo-form" onSubmit={handleSubmit}>
           <input type="text" placeholder="Add Task"  value={input} name='text' className='todo-input'
           onChange={handleChange}
           />
           <button type="submit">Add</button>
           </form>
       </header>
       </div>
    );

}
export default Dashboard;