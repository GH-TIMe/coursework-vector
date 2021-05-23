import axios from "axios";
import { API_HOST, API_PATH } from "../../config";

import {
  SET_PRODUCTION,
  SET_PRODUCTION_STATUS,
  ProductionActionType,
  ProductionData,
  EXPAND_ALL_PRODUCTION,
  CLOSE_ALL_PRODUCTION,
  SET_PRODUCTION_LOADED,
} from "../../types";

import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getProduction =
  (
    model: string,
    scheme: string = "",
    changed: "0" | "1" = "0"
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    axios
      .get(
        `${API_HOST}/${API_PATH}/${model}/schemes/${scheme}/production/${changed}`
      )
      .then(({ data: { products: production } }) =>
        dispatch(setProduction(production))
      )
      .finally(() => dispatch(setProductionLoaded(true)));
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

export const expandAllProduction: ProductionActionType = {
  type: EXPAND_ALL_PRODUCTION,
};

export const closeAllProduction: ProductionActionType = {
  type: CLOSE_ALL_PRODUCTION,
};

export const setProductionLoaded = (status: boolean): ProductionActionType => ({
  type: SET_PRODUCTION_LOADED,
  payload: status,
});
