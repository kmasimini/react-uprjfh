import React, { useState } from 'react'
import Dashboard from './Dashboard'
import Todo from './Todo';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { MdDateRange } from 'react-icons/md';
import Calender from 'Calender'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from './AuthContext';


const useStyles = makeStyles({
  Root: {
    flexGrow: 1
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function TodoList() {
   const [todos, setTodos] = useState([])
   const classes = useStyles();
   const { currentUser, logout } = useAuth();
   const addTodo = todo => {
     if(!todo.text || /^\s*$/.test(todo.text)){
       return;
     }

     const newTodos = [todo, ...todos];

     setTodos(newTodos);
    
   };
   async function handleLogout() {
    setError('');

    try {
      await logout();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
    }
  }

   const updatedTodo = (todoId, newValue) => {
    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
   }

   const removeTodo = id => {
     const removeArr = [...todos].filter(todo => todo.id !== id)

     setTodos(removeArr)
   };


   const completeTodo = id =>{
     let updatedTodos = todos.map(todo => {
       if(todo.id === id) {
         todo.isComplete = !todo.isComplete
       }
        return todo;
     })
     setTodos(updatedTodos);
   }

  return (
    
      <div className={classes.root}>
      <Grid container direction="column">
          <Grid item container spacing={false}>
            <Grid item xs={0} sm={0} />
              <Grid item xs={12} sm={10}>
              <Card >
                <CardContent>
                  <Grid container>
                    <Grid item xs={4}>
                    <div className='todo-app1'>
                    <input style={{borderRadius:'5px',border:"2px solid #e0e0e0",width:"170px", height:'30px',fontSize:'15px', margin:'15px', textAlign:"center" }} type="text" placeholder="search"  />
                    <Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none"}} >
                    <WbSunnyIcon fontSize="medium" style={{width: ''}} />

                     <Link to="/" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '10px', textDecoration:"none" }} > My Day <i style={{color: '#e65100'}} class="fa fa-sun-o" aria-hidden="true"></i></Link></Typography  >
                    
                     <Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
                     <CalendarTodayIcon fontSize="medium" style={{width: ''}}/>
                      <Link  to="/Calender" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '10px', textDecoration:"none" }} > Calender <i style={{color: '#ff9800'}} class="fa fa-calendar" aria-hidden="true"></i> </Link></Typography  >
                      <Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
                      <AssignmentIndIcon fontSize="medium" style={{width: ''}}/> 
                       <Link  to="/Notes" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '10px', textDecoration:"none" }} > Tasks <i  style={{color: '#8d6e63'}} class="fa fa-book" aria-hidden="true"></i></Link></Typography  >

                       <Typography style={{color: 'black', marginTop: '20px',marginRight: '0px', marginLeft: '30px', textDecoration:"none" }} >
                      <EventAvailableIcon fontSize="medium" style={{width: '' }}/>
                       <Link  to="/Planned" style={{color: 'black', marginTop: '720px',marginRight: '60px', marginLeft: '10px', textDecoration:"none" }} > Planned <i style={{color: '#3e2723'}}  class="fa fa-calendar-check-o" aria-hidden="true"></i> </Link></Typography  >
                    
                    </div>
                      </Grid>
                      <Grid item xs={4}>
                      <div className='todo-app'>
                      <Dashboard onSubmit={addTodo} />
                      <Typography style={{ marginLeft:'30px',fontSize: '10px' ,color:'#24527a', fontWeight:"bold", marginBottom:"50px" }}>
   
          {currentUser.email}
          </Typography>
          <Link to="/login">Sign Out</Link>
                      <Typography variant="h4" text-align="center" >
                        Tasks
                      </Typography>
                      <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}
                       updatedTodo={updatedTodo} />
                       </div>
                      </Grid>
                      <Grid item xs={4}>
                      <div className='todo-app2'>
                      <Typography variant="body2" style={{ cursor: 'pointer' }}>
                      Add Due date
                </Typography>
                    </div>
                      </Grid>
                    </Grid>
                </CardContent>
                </Card>
              </Grid>
              <Grid item xs={0} sm={0} />
            </Grid>
      </Grid>
      </div>
  );
}

export default TodoList