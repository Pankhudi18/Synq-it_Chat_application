import React from 'react'
import User from './User'
import userGetAllUsers from '../../context/userGetAllUsers'

function UserList() {
  const [allUsers, loading] = userGetAllUsers();
  console.log(allUsers);
  return (
    <div style={{ maxHeight: "calc(100vh - 80px)" }} className="overflow-y-auto no-scrollbar">
      {allUsers.map((user, index) => {
        return <User key = {index} user = {user}/>
      })}
    </div>
  )
}

export default UserList