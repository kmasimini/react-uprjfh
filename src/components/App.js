import React from 'react';
import Signup from './Signup';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './AuthContext';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './PrivateRoute'
import TodoList from './TodoList'

export default function App() {
  return (
    <div>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxwidth: '200px' }}>
          <Router>
            <AuthProvider>
              <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute exact path="/" component={TodoList} />
              <Route path="/signup" component={Signup} />
              </Switch>
            </AuthProvider>
          </Router>
        </div>
      </Container>
    </div>
  );
}
