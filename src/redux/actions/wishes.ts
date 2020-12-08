import axios from "axios";
import { API_HOST, API_PATH } from "../../config";

import {
  SET_WISHES,
  SET_WISHES_STATUS,
  SAVE_WISHES,
  WishesActionType,
  SaveWishesPayloadTypes,
  SetWishesPayload,
} from "../../types";

import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getWishes = (
  id: number
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  axios
    .get(`${API_HOST}/${API_PATH}/${id}/wishes`)
    .then(({ data: { products: wishes, scheme } }) =>
      dispatch(setWishes({ wishes, scheme }))
    );
};

export const setWishes = (wishes: SetWishesPayload): WishesActionType => ({
  type: SET_WISHES,
  payload: wishes,
});

export const setWishesStatus = (args: string[]): WishesActionType => ({
  type: SET_WISHES_STATUS,
  payload: args,
});

export const saveWishes = (obj: SaveWishesPayloadTypes): WishesActionType => ({
  type: SAVE_WISHES,
  payload: obj,
});
