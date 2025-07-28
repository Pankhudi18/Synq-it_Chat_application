import React from 'react'

function User() {
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
        Pankhudi
    </h1>
    <span>pankhudi@gamil.com</span>
</div>
    </div>
    </div>
  )
}

export default User