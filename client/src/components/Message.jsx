import React from "react";

const Message = ({ name, message }) => {
  return (
    <div className="message">
      {name} - {message}
    </div>
  );
};

export default Message;
