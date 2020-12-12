import {
  SET_PRODUCTS,
  SAVE_PRODUCTS,
  ProductsActionType,
  ProductsData,
} from "../../types";

interface StateTypes {
  products: ProductsData[];
}

const initialState: StateTypes = {
  products: [],
};

const products = (
  state = initialState,
  action: ProductsActionType
): StateTypes => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }
    case SAVE_PRODUCTS: {
      const {
        index,
        values: { price, amount },
      } = action.payload;
      const modifedProducts = [...state.products];
      const {
        last_price: OldLastPrice,
        last_volume: OldLastVolume,
      } = modifedProducts[index];

      if (OldLastPrice === price && +OldLastVolume === amount) {
        return {
          ...state,
        };
      }

      modifedProducts[index] = {
        ...modifedProducts[index],
        last_volume: "" + amount,
        last_price: price,
      };

      return {
        ...state,
        products: modifedProducts,
      };
    }
    default:
      return { ...state };
  }
};

export default products;
