import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Form from "./components/Form";
import MessageList from "./components/MessageList";
import {
  addMessage,
  changeConnectStatus,
  changeInputValue,
} from "./store/action";

function App() {
  const dispatch = useDispatch();
  const socket = useRef();
  const userName = useSelector((state) => state.userName);
  const inputValue = useSelector((state) => state.inputValue);

  function connect() {
    socket.current = new WebSocket("ws://localhost:5000");

    socket.current.onopen = () => {
      dispatch(changeConnectStatus());
      const message = {
        event: "connection",
        userName,
        id: Date.now(),
      };
      socket.current.send(JSON.stringify(message));
    };
    socket.current.onmessage = (event) => {
      const message = JSON.parse(event.data);
      dispatch(addMessage(message));
    };
    socket.current.onclose = () => {
      console.log("Socket закрыт");
    };
    socket.current.onerror = () => {
      console.log("Socket произошла ошибка");
    };
  }

  const sendMessage = async () => {
    const message = {
      userName,
      message: inputValue,
      id: Date.now(),
      event: "message",
    };
    socket.current.send(JSON.stringify(message));
    dispatch(changeInputValue(""));
  };

  return (
    <div className="center">
      <Form connect={connect} sendMessage={sendMessage} />
      <MessageList />
    </div>
  );
}

export default App;
