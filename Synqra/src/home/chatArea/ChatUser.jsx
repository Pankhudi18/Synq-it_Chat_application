import React from "react";

function ChatUser() {
  return (
    <>
    <div className=" pl-5 pt-5 pb-3 h-[14vh] flex space-x-4 bg-gray-900 hover:bg-gray-600 duration-300">
      <div>
        <div className="avatar avatar-online">
          <div className="w-10 rounded-full">
            <img src="https://img.daisyui.com/images/profile/demo/gordon@192.webp" />
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-xl font-bold">Pankhudi</h1>
        <span className="text-sm">Online</span>
      </div>
      </div>
    </>
  );
}

export default ChatUser;
