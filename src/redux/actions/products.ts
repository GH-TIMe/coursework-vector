import axios from "axios";
import { API_HOST, API_PATH } from "../../config";
import { SET_PRODUCTS, ProductsActionType, ProductsData } from "../../types";
import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getProducts = (
  schemesID: string,
  wishesID: string = ""
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  axios
    .get(`${API_HOST}/${API_PATH}/${schemesID}/schemes/${wishesID}/wishes`)
    .then(({ data: { products } }) => dispatch(setProducts(products)));
};

export const setProducts = (products: ProductsData[]): ProductsActionType => ({
  type: SET_PRODUCTS,
  payload: products,
});
