import axios from "axios";
import { API_HOST, API_PATH } from "../../config";
import {
  SET_BLOCKS_SELL,
  SET_BLOCKS_SELL_STATUS,
  SET_BLOCKS_ADD,
  BudgetActionTypes,
  BlocksData,
  WishesData,
  EXPAND_ALL_SELL,
  CLOSE_ALL_SELL,
} from "../../types";
import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getBlocksSell =
  (
    model: string,
    scheme: string = ""
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    axios
      .get(`${API_HOST}/${API_PATH}/${model}/schemes/${scheme}/blocks_sell/0`)
      .then(({ data: { products: blocksSell } }) =>
        dispatch(setBlockSell(blocksSell))
      );
  };

const setBlockSell = (blocksSell: WishesData[]): BudgetActionTypes => ({
  type: SET_BLOCKS_SELL,
  payload: blocksSell,
});

export const setBlockSellStatus = (args: string[]): BudgetActionTypes => ({
  type: SET_BLOCKS_SELL_STATUS,
  payload: args,
});

export const getBlocksAdd =
  (
    model: string,
    scheme: string = ""
  ): ThunkAction<void, RootState, unknown, Action<string>> =>
  (dispatch) => {
    axios
      .get(`${API_HOST}/${API_PATH}/${model}/schemes/${scheme}/blocks_add/0`)
      .then(({ data: { products: blocksAdd } }) =>
        dispatch(setBlockAdd(blocksAdd))
      );
  };

const setBlockAdd = (blocksAdd: BlocksData[]): BudgetActionTypes => ({
  type: SET_BLOCKS_ADD,
  payload: blocksAdd,
});

export const expandAllSell: BudgetActionTypes = {
  type: EXPAND_ALL_SELL,
};

export const closeAllSell: BudgetActionTypes = {
  type: CLOSE_ALL_SELL,
};
