import { types } from "./types";

const initState = {
  messages: [],
  inputValue: "",
  connected: false,
  userName: "",
};

export const reducers = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
      return { ...state, messages: [action.payload, ...state.messages] };
    case types.CHANGE_INPUT_VALUE:
      return { ...state, inputValue: action.payload.value };
    case types.CHANGE_CONNECT_STATUS:
      let connectStatus = state.connected;
      connectStatus === false
        ? (connectStatus = true)
        : (connectStatus = false);
      return { ...state, connected: connectStatus };
    case types.CREATE_USERNAME:
      return { ...state, userName: action.payload.name };
    default:
      return state;
  }
};
