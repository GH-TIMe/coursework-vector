import axios from "axios";
import { API_HOST, API_PATH } from "../../config";
import {
  SET_PRODUCTS,
  SAVE_PRODUCTS,
  ProductsActionType,
  ProductsData,
  PayloadSaveProductsAction,
  CLEAR_PRODUCTS_REQUEST,
  SET_PRODUCTS_LOADED,
} from "../../types";
import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getProducts =
  (
    model: string,
    scheme: string = ""
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    axios
      .get(`${API_HOST}/${API_PATH}/${model}/schemes/${scheme}/wishes`)
      .then(({ data: { products } }) => dispatch(setProducts(products)))
      .finally(() => dispatch(setProductsLoaded(true)));
  };

export const setProducts = (products: ProductsData[]): ProductsActionType => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const saveProducts = (
  obj: PayloadSaveProductsAction
): ProductsActionType => ({
  type: SAVE_PRODUCTS,
  payload: obj,
});

export const clearProductsRequest: ProductsActionType = {
  type: CLEAR_PRODUCTS_REQUEST,
};

export const setProductsLoaded = (status: boolean): ProductsActionType => ({
  type: SET_PRODUCTS_LOADED,
  payload: status,
});
