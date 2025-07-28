import React from 'react'
import Left from './home/Left/left'
import Right from './home/Right/right'
import Logout from './home/Left1/Logout'

function App() {
  return (
    <>
    <div className = "flex h-screen">
      <Logout/>
      <Left/>
      <Right/>
    </div>
    </>
  )
}

export default App