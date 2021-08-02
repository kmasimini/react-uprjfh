import React from 'react';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import TodoList from './TodoList';
import './list.css';
import img1 from '.components/images/office.jpg'

export default function App() {
  return (
    <div>
      <div className="form-container">
        <div className="form-content-left"> 
        <img src={ img1 } alt="" className="form-img" />
        </div>
        <Router>
        <AuthProvider>
        <Route path="/signup" component={Signup} />
                <Route path="/login" component={Login} />
                </AuthProvider>
                </Router>
      </div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxwidth: '200px' }}>
          <Router>
            <AuthProvider>
              <Switch>
              <PrivateRoute exact path="/" component={TodoList} />
               
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}
