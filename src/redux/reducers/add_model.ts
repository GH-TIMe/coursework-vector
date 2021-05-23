import { AddModelTypes, Client, SET_CLIENTS } from "../../types";

type addModelStateType = {
  clients: Client[];
};

const initialState = {
  clients: [],
} as addModelStateType;

const addModel = (state = initialState, action: AddModelTypes) => {
  switch (action.type) {
    case SET_CLIENTS:
      return {
        ...state,
        clients: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default addModel;
