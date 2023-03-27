import React from "react";

const ConnectMessage = ({ name }) => {
  return (
    <div className="connection_message">Пользователь {name} подключился</div>
  );
};

export default ConnectMessage;
