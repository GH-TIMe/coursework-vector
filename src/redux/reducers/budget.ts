import {
  SET_BLOCKS_SELL,
  SET_BLOCKS_ADD,
  BlocksData,
  BudgetActionTypes,
  WishesTypes,
  WishesData,
} from "../../types";
import { getKeysObj, getSumsAndAvg, groupData } from "./wishes";

type StateTypes = {
  blocks: {
    add: BlocksData[];
    sell: {
      values: WishesTypes;
      status: any;
    };
  };
};

const initialState: StateTypes = {
  blocks: {
    sell: {
      values: {},
      status: {},
    },
    add: [],
  },
};

const budget = (
  state = initialState,
  action: BudgetActionTypes
): StateTypes => {
  switch (action.type) {
    case SET_BLOCKS_SELL: {
      const sell = action.payload.map((row) => ({
        ...row,
        price: +row.price,
      }));
      const groups = groupData(sell);
      const status = getKeysObj(groups);
      const groupAndSum: WishesTypes = getSumsAndAvg(groups);
      return {
        ...state,
        blocks: {
          ...state.blocks,
          sell: {
            values: groupAndSum,
            status,
          },
        },
      };
    }
    case SET_BLOCKS_ADD: {
      return {
        ...state,
        blocks: {
          ...state.blocks,
          add: action.payload,
        },
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default budget;
