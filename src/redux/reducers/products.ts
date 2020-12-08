import { SET_PRODUCTS, ProductsActionType, ProductsData } from "../../types";

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
    default:
      return { ...state };
  }
};

export default products;
