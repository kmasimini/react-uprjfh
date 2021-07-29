import React from 'react';
import './todo.css'

class Dashboard extends React.Component{
  render(){
    return(
      <div className="Dashboard">
       <header>
         <form id="to-do-form">
           <input type="text" placeholder="Add Task" />
           <button type="submit">Add</button>
           </form>
       </header>
       </div>
    );
  }

}
export default Dashboard;