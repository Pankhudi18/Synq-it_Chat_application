import React from 'react'
import ChatUser from './ChatUser'
import Message from './Message'
import MessageList from './MessageList'
import Typebar from './Typebar'

function ChatArea() {
  return (
    <div className = "w-[70%] bg-slate-950 text-white">
        <ChatUser/>
        <MessageList/>
        <Typebar/>
    </div>
  )
}

export default ChatArea