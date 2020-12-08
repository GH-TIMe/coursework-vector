import axios from "axios";
import { API_HOST, API_PATH } from "../../config";
import {
  SET_PURCHASES,
  SAVE_PURCHASES,
  PurchaseActionType,
  PurchaseData,
  SavePurchasePayloadTypes,
} from "../../types";
import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getPurchases = (
  model: string,
  scheme: string = ""
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  axios
    .get(`${API_HOST}/${API_PATH}/${model}/schemes/${scheme}/purchase/0`)
    .then(({ data: { products: purchase } }) =>
      dispatch(setPurchases(purchase))
    );
};

export const setPurchases = (purchase: PurchaseData[]): PurchaseActionType => ({
  type: SET_PURCHASES,
  payload: purchase,
});

export const savePurchase = (
  obj: SavePurchasePayloadTypes
): PurchaseActionType => ({
  type: SAVE_PURCHASES,
  payload: obj,
});
