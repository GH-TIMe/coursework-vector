import axios from "axios";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { API_HOST, API_PATH } from "../../config";
import { AddModelTypes, Client, SET_CLIENTS } from "../../types";
import { RootState } from "../reducers";

const setClients = (clients: Client[]): AddModelTypes => ({
  type: SET_CLIENTS,
  payload: clients,
});

const initialClients =
  (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
    axios
      .get(`${API_HOST}/${API_PATH}/add_model/`)
      .then(({ data }) => dispatch(setClients(data.clients as Client[])));
  };

export { setClients, initialClients };
