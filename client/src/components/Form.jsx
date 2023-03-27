import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeInputValue, createUserName } from "../store/action";

const Form = ({ connect, sendMessage }) => {
  const dispatch = useDispatch();
  const connected = useSelector((state) => state.connected);
  const inputValue = useSelector((state) => state.inputValue);
  const userName = useSelector((state) => state.userName);

  const inputNameHandler = (e) => dispatch(createUserName(e.target.value));

  const inputMessageHandler = (e) => dispatch(changeInputValue(e.target.value));

  return (
    <div className="form">
      <input
        value={connected ? inputValue : userName}
        onChange={connected ? inputMessageHandler : inputNameHandler}
        type="text"
        placeholder={connected ? "" : "Введите ваше имя"}
      />
      {connected ? (
        <button onClick={() => sendMessage()}>Отправить</button>
      ) : (
        <button onClick={() => connect()}>Войти</button>
      )}
    </div>
  );
};

export default Form;
