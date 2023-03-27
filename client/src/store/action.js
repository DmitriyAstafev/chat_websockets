import { types } from "./types";

export const addMessage = (message) => ({
  type: types.ADD_MESSAGE,
  payload: message,
});
export const changeInputValue = (value) => ({
  type: types.CHANGE_INPUT_VALUE,
  payload: { value },
});
export const changeConnectStatus = () => ({
  type: types.CHANGE_CONNECT_STATUS,
});
export const createUserName = (name) => ({
  type: types.CREATE_USERNAME,
  payload: { name },
});
