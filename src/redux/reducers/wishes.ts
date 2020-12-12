import {
  SET_WISHES,
  SET_WISHES_STATUS,
  SAVE_WISHES,
  WishesActionType,
  WishesData,
  WishesItemTypes,
  WishesTypes,
  BlocksData,
} from "../../types";

interface StateTypes {
  wishes: WishesTypes;
  status: any;
  scheme: number;
}

const initialState: StateTypes = {
  wishes: {},
  status: {},
  scheme: 1315,
};

export const groupData = (data: WishesData[]) => {
  const regexFirstGroupCode: RegExp = /^([0-9][0-9]*)\./;
  const regexSecondGroupCode: RegExp = /^([0-9][0-9]*\.[0-9]*)/;

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
      (r: any, a: WishesItemTypes) => {
        r[a.secondGroup] = r[a.secondGroup] || { values: [] };
        r[a.secondGroup]["values"].push(a);
        return r;
      },
      Object.create(null)
    );
  });

  return groups;
};

export type ValuesTypes = {
  amount: number;
  price: number;
  mult: number;
};

export const doCalculates = (arr: any) => {
  return arr.reduce(
    (r: ValuesTypes, a: { price: number; amount: string | number }) => {
      r.mult += a.price * +a.amount;
      r.price += a.price;
      r.amount += +a.amount;
      return r;
    },
    {
      amount: 0,
      price: 0,
      mult: 0,
    }
  );
};

export const getSumsAndAvg = (data: any) => {
  Object.keys(data).forEach((key1) => {
    Object.keys(data[key1].values).forEach((key2) => {
      const { amount, price, mult } = doCalculates(
        data[key1].values[key2].values
      );

      data[key1].values[key2] = {
        values: data[key1].values[key2].values,
        price,
        amount,
        averagePrice: amount ? mult / amount : 0,
      };
    });

    const arrKey2 = Object.keys(data[key1].values).map((key2) => {
      const { amount, averagePrice: price } = data[key1].values[key2];
      return { amount, price };
    });

    const { amount, price, mult } = doCalculates(arrKey2);

    data[key1] = {
      values: data[key1].values,
      price,
      amount,
      averagePrice: mult / amount,
    };
  });

  return data;
};

export const getKeysObj = (obj: any) => {
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

const products = (
  state = initialState,
  action: WishesActionType
): StateTypes => {
  switch (action.type) {
    case SET_WISHES: {
      const { wishes, scheme } = action.payload;
      const groups = groupData(wishes);
      const status = getKeysObj(groups);
      const groupAndSum: WishesTypes = getSumsAndAvg(groups);

      return {
        ...state,
        wishes: groupAndSum,
        status,
        scheme,
      };
    }
    case SET_WISHES_STATUS: {
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
    case SAVE_WISHES: {
      const { key1, key2, amount, price, index } = action.payload;

      const key2Group = state.wishes[key1].values[key2].values;

      const modifedValues = [...key2Group];
      const { amount: oldAmount, price: oldPrice } = modifedValues[index];

      if (amount === oldAmount && "" + oldPrice === price) {
        return {
          ...state,
        };
      }

      const copyStateWishes = { ...state.wishes };
      let modifedState = copyStateWishes[key1].values[key2].values[index];
      modifedState.price = +price;
      modifedState.amount = amount;

      return {
        ...state,
        wishes: getSumsAndAvg(copyStateWishes),
      };
    }
    default:
      return { ...state };
  }
};

export default products;
