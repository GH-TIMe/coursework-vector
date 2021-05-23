import axios from "axios";
import { API_HOST, API_PATH } from "../../config";
import {
  SET_PURCHASES,
  SAVE_PURCHASES,
  CLEAR_PURCHASE_REQUEST,
  PurchaseActionType,
  PurchaseData,
  SavePurchasePayloadTypes,
  SET_PURCHASE_LOADED,
} from "../../types";
import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getPurchases =
  (
    model: string,
    scheme: string = "",
    changed: "0" | "1" = "0"
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    axios
      .get(
        `${API_HOST}/${API_PATH}/${model}/schemes/${scheme}/purchase/${changed}/`
      )
      .then(({ data: { products: purchase } }) =>
        dispatch(setPurchases(purchase))
      )
      .finally(() => dispatch(setPurchaseLoaded(true)));
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

export const clearPurchaseRequest: PurchaseActionType = {
  type: CLEAR_PURCHASE_REQUEST,
};

export const setPurchaseLoaded = (status: boolean): PurchaseActionType => ({
  type: SET_PURCHASE_LOADED,
  payload: status,
});
