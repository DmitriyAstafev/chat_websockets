import React from "react";
import { useSelector } from "react-redux";
import ConnectMessage from "./ConnectMessage";
import Message from "./Message";

const MessageList = () => {
  const messages = useSelector((state) => state.messages);

  return (
    <div className="messages">
      {messages.map((mess) => (
        <div key={mess.id}>
          {mess.event === "connection" ? (
            <ConnectMessage name={mess.userName} />
          ) : (
            <Message name={mess.userName} message={mess.message} />
          )}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
