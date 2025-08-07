import React from 'react'

function User({ user }) {
  return (
    <div>
    <div className = "flex space-x-6 px-4 py-6 hover:bg-slate-600 cursor-pointer">
        <div className="avatar avatar-online">
  <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
  </div>
</div>

<div>
    <h1 className = "font-bold">
        {user.name}
    </h1>
    <span>{user.email}</span>
</div>
    </div>
    </div>
  )
}

export default User