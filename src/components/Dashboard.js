import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import  { useAuth } from "./AuthContext"
import './todo.css'


export default function Dashboard(){
   const { logout } = useAuth()

   async function handleLogout(){
     setError("")
      try{
         await logout()
         history.push('/login')
      }catch{
        setError('Failed to log out')
      }
   }

  return(
    <>
    <div className="Dashboard">
       <header>
        <form id="to-do-form">
         <input type="text" placeholder="Add task"/>
         <button type="submit">Add</button>
         </form>
        </header>
      </div>
     <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>Log Out</Button>
      </div>
      </>
  )
}