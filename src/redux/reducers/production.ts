import { expandOrCloseAll } from "../../helpers";
import {
  SET_PRODUCTION,
  SET_PRODUCTION_STATUS,
  ProductionActionType,
  ProductionData,
  ProductionTypes,
  ProductionItemTypes,
  EXPAND_ALL_PRODUCTION,
  CLOSE_ALL_PRODUCTION,
  SET_PRODUCTION_LOADED,
} from "../../types";

interface StateTypes {
  production: ProductionTypes;
  status: any;
  isOpen: boolean;
  loaded: boolean;
}

const initialState: StateTypes = {
  production: {},
  status: {},
  isOpen: false,
  loaded: true,
};

const regexFirstGroupCode: RegExp = /^([0-9][0-9]*)\./;
const regexSecondGroupCode: RegExp = /^([0-9][0-9]*\.[0-9]*)/;

const groupData = (data: ProductionData[]) => {
  const newData = data.map((item) => {
    const firstGroup: string =
      item.code.match(regexFirstGroupCode)![1] || "all";
    const secondGroup: string =
      item.code.match(regexSecondGroupCode)![1] || "all";

    return {
      ...item,
      firstGroup,
      secondGroup,
    };
  });

  let groups = newData.reduce((r, a) => {
    r[a.firstGroup] = r[a.firstGroup] || { values: [] };
    r[a.firstGroup]["values"].push(a);
    return r;
  }, Object.create(null));

  Object.keys(groups).forEach((key) => {
    groups[key].values = groups[key].values.reduce(
      (r: any, a: ProductionItemTypes) => {
        r[a.secondGroup] = r[a.secondGroup] || { values: [] };
        r[a.secondGroup]["values"].push(a);
        return r;
      },
      Object.create(null)
    );
  });

  return groups;
};

const doCalculates = (arr: any) => {
  return arr.reduce((r: number, a: { amount: string | number }) => {
    r += +a.amount;
    return r;
  }, 0);
};

const getSums = (data: any) => {
  Object.keys(data).forEach((key1) => {
    Object.keys(data[key1].values).forEach((key2) => {
      const amount = doCalculates(data[key1].values[key2].values);

      data[key1].values[key2] = {
        values: data[key1].values[key2].values,
        amount,
      };
    });

    const arrKey2 = Object.keys(data[key1].values).map((key2) => {
      const { amount } = data[key1].values[key2];
      return { amount };
    });

    const amount = doCalculates(arrKey2);

    data[key1] = {
      values: data[key1].values,
      amount,
    };
  });

  return data;
};

const getKeysObj = (obj: any) => {
  let newObj = { status: false };
  if (!Array.isArray(obj)) {
    for (let key in obj) {
      newObj = {
        ...newObj,
        [key]: getKeysObj(obj[key].values),
      };
    }
  }

  return newObj;
};

const production = (
  state = initialState,
  action: ProductionActionType
): StateTypes => {
  switch (action.type) {
    case SET_PRODUCTION: {
      const production = action.payload;
      const groups = groupData(production);
      const status = getKeysObj(groups);
      const groupAndSum: ProductionTypes = getSums(groups);

      return {
        ...state,
        production: groupAndSum,
        status,
      };
    }
    case SET_PRODUCTION_STATUS: {
      const indexes = action.payload;
      if (indexes.length === 2) {
        return {
          ...state,
          status: {
            ...state.status,
            [indexes[0]]: {
              ...state.status[indexes[0]],
              [indexes[1]]: {
                status: !state.status[indexes[0]][indexes[1]].status,
              },
            },
          },
        };
      }
      if (indexes.length === 1) {
        return {
          ...state,
          status: {
            ...state.status,
            [indexes[0]]: {
              ...state.status[indexes[0]],
              status: !state.status[indexes[0]].status,
            },
          },
        };
      }
      return {
        ...state,
      };
    }
    case SET_PRODUCTION_LOADED: {
      return {
        ...state,
        loaded: action.payload,
      };
    }
    case EXPAND_ALL_PRODUCTION: {
      return {
        ...state,
        status: expandOrCloseAll(state.status),
        isOpen: true,
      };
    }
    case CLOSE_ALL_PRODUCTION: {
      return {
        ...state,
        status: expandOrCloseAll(state.status, false),
        isOpen: false,
      };
    }
    default:
      return { ...state };
  }
};

export default production;
