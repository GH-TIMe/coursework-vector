import {
  SET_PRODUCTS,
  SAVE_PRODUCTS,
  CLEAR_PRODUCTS_REQUEST,
  ProductsActionType,
  ProductsData,
  SET_PRODUCTS_LOADED,
} from "../../types";

interface StateTypes {
  products: ProductsData[];
  request: FormData;
  loaded: boolean;
}

const initialState: StateTypes = {
  products: [],
  request: new FormData(),
  loaded: true,
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
      const { price: oldLastPrice, amount: oldLastAmount } =
        modifedProducts[index];

      if (oldLastPrice === price && +oldLastAmount === amount) {
        return {
          ...state,
        };
      }

      // создаём request
      if (oldLastPrice !== price) {
        state.request.append(`${modifedProducts[index].id}_price`, "" + price);
      }
      if (+oldLastAmount !== amount) {
        state.request.append(
          `${modifedProducts[index].id}_amount`,
          "" + amount
        );
      }

      modifedProducts[index] = {
        ...modifedProducts[index],
        amount: "" + amount,
        price,
      };

      return {
        ...state,
        products: modifedProducts,
      };
    }
    case SET_PRODUCTS_LOADED: {
      return {
        ...state,
        loaded: action.payload,
      };
    }
    case CLEAR_PRODUCTS_REQUEST: {
      return {
        ...state,
        request: new FormData(),
      };
    }
    default:
      return { ...state };
  }
};

export default products;
