import React from 'react'
import User from './User'

function UserList() {
  return (
    <div style={{ maxHeight: "calc(100vh - 80px)" }} className="overflow-y-auto no-scrollbar">
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
    </div>
  )
}

export default UserList