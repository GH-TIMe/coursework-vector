import { expandOrCloseAll } from "../../helpers";
import {
  SET_BLOCKS_SELL,
  SET_BLOCKS_SELL_STATUS,
  SET_BLOCKS_ADD,
  BlocksData,
  BudgetActionTypes,
  WishesTypes,
  EXPAND_ALL_SELL,
  CLOSE_ALL_SELL,
} from "../../types";
import { getKeysObj, getSumsAndAvg, groupData } from "./wishes";

type StateTypes = {
  blocks: {
    add: BlocksData[];
    sell: {
      values: WishesTypes;
      status: any;
      isOpen: boolean;
    };
  };
};

const initialState: StateTypes = {
  blocks: {
    sell: {
      values: {},
      status: {},
      isOpen: false,
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
            ...state.blocks.sell,
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
    case SET_BLOCKS_SELL_STATUS: {
      const indexes = action.payload;
      if (indexes.length === 2) {
        return {
          ...state,
          blocks: {
            ...state.blocks,
            sell: {
              ...state.blocks.sell,
              status: {
                ...state.blocks.sell.status,
                [indexes[0]]: {
                  ...state.blocks.sell.status[indexes[0]],
                  [indexes[1]]: {
                    status:
                      !state.blocks.sell.status[indexes[0]][indexes[1]].status,
                  },
                },
              },
            },
          },
        };
      }
      if (indexes.length === 1) {
        return {
          ...state,
          blocks: {
            ...state.blocks,
            sell: {
              ...state.blocks.sell,
              status: {
                ...state.blocks.sell.status,
                [indexes[0]]: {
                  ...state.blocks.sell.status[indexes[0]],
                  status: !state.blocks.sell.status[indexes[0]].status,
                },
              },
            },
          },
        };
      }
      return {
        ...state,
      };
    }
    case EXPAND_ALL_SELL: {
      return {
        ...state,
        blocks: {
          ...state.blocks,
          sell: {
            ...state.blocks.sell,
            status: expandOrCloseAll(state.blocks.sell.status),
            isOpen: true,
          },
        },
      };
    }
    case CLOSE_ALL_SELL: {
      return {
        ...state,
        blocks: {
          ...state.blocks,
          sell: {
            ...state.blocks.sell,
            status: expandOrCloseAll(state.blocks.sell.status, false),
            isOpen: false,
          },
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
