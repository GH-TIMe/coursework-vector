import axios from "axios";
import { API_HOST, API_PATH } from "../../config";

import {
  SET_PRODUCTION,
  SET_PRODUCTION_STATUS,
  ProductionActionType,
  ProductionData,
} from "../../types";

import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getProduction = (
  model: string,
  scheme: string = ""
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  axios
    .get(`${API_HOST}/${API_PATH}/${model}/schemes/${scheme}/production/0`)
    .then(({ data: { products: production } }) =>
      dispatch(setProduction(production))
    );
};

export const setProduction = (
  production: ProductionData[]
): ProductionActionType => ({
  type: SET_PRODUCTION,
  payload: production,
});

export const setProductionStatus = (args: string[]): ProductionActionType => ({
  type: SET_PRODUCTION_STATUS,
  payload: args,
});
