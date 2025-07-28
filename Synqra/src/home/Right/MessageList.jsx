import React from 'react';
import Message from './Message';

function MessageList() {
  return (
    <div className="" style = {{minHeight: "calc(84vh - 8vh)"}}>
      <Message />
      <Message />
      
    </div>
  );
}

export default MessageList;
