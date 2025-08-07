import React from 'react'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './home/LogSidebar/Logout'
import List from './home/chatList/List'
import ChatArea from './home/chatArea/ChatArea'
import { useAuth } from './context/AuthProvider'

function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (
    <>
    <div className = "flex h-screen">
      <Logout/>
      <List />
      <ChatArea/>
    </div>

    <Signup />
    <Login />
    </>
  )
}

export default App