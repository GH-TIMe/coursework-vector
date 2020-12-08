import {
  SET_PURCHASES,
  SAVE_PURCHASES,
  PurchaseActionType,
  PurchaseData,
} from "../../types";

interface stateTypes {
  purchase: PurchaseData[];
}

const initialState: stateTypes = {
  purchase: [],
};

const models = (
  state = initialState,
  action: PurchaseActionType
): stateTypes => {
  switch (action.type) {
    case SET_PURCHASES: {
      return {
        ...state,
        purchase: action.payload,
      };
    }
    case SAVE_PURCHASES: {
      const modifedPurchases = [...state.purchase];
      const { index, price } = action.payload;
      modifedPurchases[index].price = price;

      return {
        ...state,
        purchase: modifedPurchases,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default models;
