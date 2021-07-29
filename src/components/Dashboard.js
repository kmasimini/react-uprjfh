import React, {useState} from 'react';
import './todo.css'


function Dashboard(){
  const [input, setInput] = useState('');
  const handleChange = e => {
    setInput(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

   // props.onSubmit({
     // text: input
    //})
    setInput('');
  }
  
    return(
      <div className="Dashboard" onSubmit={handleSubmit}>
       <header>
         <form id="to-do-form">
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