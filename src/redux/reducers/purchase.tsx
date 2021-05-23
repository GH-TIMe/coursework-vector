import {
  SET_PURCHASES,
  SAVE_PURCHASES,
  PurchaseActionType,
  PurchaseData,
  CLEAR_PURCHASE_REQUEST,
  SET_PURCHASE_LOADED,
} from "../../types";

interface stateTypes {
  purchase: PurchaseData[];
  request: FormData;
  loaded: boolean;
}

const initialState: stateTypes = {
  purchase: [],
  request: new FormData(),
  loaded: true,
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
    case SET_PURCHASE_LOADED: {
      return {
        ...state,
        loaded: action.payload,
      };
    }
    case SAVE_PURCHASES: {
      const modifedPurchases = [...state.purchase];
      const { index, price } = action.payload;
      const selectedPurchase = modifedPurchases[index];

      const oldPrice = selectedPurchase.price;
      if (oldPrice === price) {
        return { ...state };
      }

      // Заполняем request
      state.request.append(`${selectedPurchase.id}`, "" + price);

      selectedPurchase.price = price;

      return {
        ...state,
        purchase: modifedPurchases,
      };
    }
    case CLEAR_PURCHASE_REQUEST: {
      return {
        ...state,
        request: new FormData(),
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default models;
