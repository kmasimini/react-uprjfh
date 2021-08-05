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
   const addTodo = todo => {
     if(!todo.text || /^\s*$/.test(todo.text)){
       return;
     }

     const newTodos = [todo, ...todos];

     setTodos(newTodos);
    
   };
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
                       <div  className="ui search">
                       </div>
                    </div>
                      </Grid>
                      <Grid item xs={4}>
                      <div className='todo-app'>
                      <Dashboard onSubmit={addTodo} />
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