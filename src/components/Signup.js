import React, { useRef, useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from './AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordComfirmRef = useRef();
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()
    
  async function handleSubmit(e){
    e.preventDefault()
   if(passwordRef.current.value !== passwordComfirmRef.current.value){
     return setError('Password do not match!')
   }

   try{
        setError("")
        setLoading(true)
       await signup(emailRef.current.value, passwordRef.current.value)
       history.push("/login")
   }catch {
       setError('Failed to create an account')
   }

    setLoading(false)
   
 }

  return (
    <>
    <div className="form-container">
     <div className="form-content-left"> 
        <img src="" alt="" className="form-img" />
        </div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign up</h2>
            {error &&<Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-Confirm">
              <Form.Label>Password Comfirm</Form.Label>
              <Form.Control type="password" ref={passwordComfirmRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
            <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
          </Form>
        </Card.Body>
      </Card>
      </div>
    </>
  );
}
