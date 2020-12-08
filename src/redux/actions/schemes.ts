import axios from "axios";
import { API_HOST, API_PATH } from "../../config";

import { SET_SCHEMES, ShemesData, SchemesActionType } from "../../types";

import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getViewData = (
  id: number
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  axios
    .get(`${API_HOST}/${API_PATH}/${id}/schemes`)
    .then(({ data: { schemes } }) => dispatch(setViewData(schemes)));
};

export const setViewData = (schemes: ShemesData[]): SchemesActionType => ({
  type: SET_SCHEMES,
  payload: schemes,
});
