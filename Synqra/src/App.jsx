import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './home/LogSidebar/Logout'
import List from './home/chatList/List'
import ChatArea from './home/chatArea/ChatArea'
import { useAuth } from './context/AuthProvider'
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <>
    <Routes>
      <Route path= "/" element = {
        authUser ? (
          <div className = "flex h-screen">
            <Logout/>
            <List />
            <ChatArea/>
          </div>
          ) : (
            <Navigate to = {"/login"}/>
          )
        }
      />
      <Route path = "/signup" element = {authUser ? <Navigate to = {"/"} /> : <Signup/>} />
      <Route path = "/login" element = {authUser ? <Navigate to = {"/"} /> : <Login/>} />
    </Routes>
    </>
  )
}

export default App