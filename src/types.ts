import { RouteComponentProps } from "react-router-dom";

//head cells types

export interface HeadCell {
  readonly id: string;
  disablePadding: boolean;
  label: string;
  numeric: boolean;
}

export type ColumnsTypes = {
  id: keyof DataTypes;
  label: string;
  minWidth?: number;
  align?: "right";
  editable?: boolean;
  format?: (value: number | string) => string;
};

// data types

export type ModelsData = {
  id: number;
  client_id?: number;
  amount?: string;
  month?: string;
  name?: string;
  num?: number;
  profit?: string;
  stage?: number;
  volume?: number;
};

export type ShemesData = {
  id: number;
  profit?: string;
  ts?: string;
  type?: number;
};

export type WishesData = {
  id: number;
  amount: string;
  code: string;
  name: string;
  price: number;
};

type GroupTypes = {
  firstGroup: string;
  secondGroup: string;
};

export type WishesItemTypes = WishesData & GroupTypes;

export type WishesTypes = {
  [key1: string]: {
    values: {
      [key2: string]: {
        values: WishesItemTypes[];
        amount: number;
        price: number;
        averagePrice: number;
      };
    };
    amount: number;
    price: number;
    averagePrice: number;
  };
};

export type PurchaseData = {
  amount: string;
  code: string;
  id: number;
  name: string;
  price: number;
};

export type ProductionItemTypes = ProductionData & GroupTypes;

export type ProductionTypes = {
  [key1: string]: {
    values: {
      [key2: string]: {
        values: ProductionItemTypes[];
        amount: number;
      };
    };
    amount: number;
  };
};

export type ProductionData = {
  amount: string;
  code: string;
  id: number;
  name: string;
};

export type ProductsData = {
  id: number;
  amount: string;
  code: string;
  curr_cost: number;
  curr_rent: number;
  last_cost: number;
  last_price: number;
  last_rent: number;
  last_volume: string;
  name: string;
  price: number;
};

export type DataTypes = ModelsData & ShemesData & ProductsData;

export type BlocksData = {
  amount: string;
  code: string;
  id: number;
  name: string;
  price: string;
};

// state types

export interface SchemesStateTypes {
  schemes: {
    schemes: ShemesData[];
  };
}

export interface WishesStateTypes {
  wishes: {
    wishes: WishesTypes;
    status: any;
    scheme: number;
  };
}

export interface PurchaseStateTypes {
  purchase: {
    purchase: PurchaseData[];
  };
}

export interface ProductsStateTypes {
  products: {
    products: ProductsData[];
  };
}

export interface ProductionStateTypes {
  production: {
    production: ProductionTypes;
    status: any;
  };
}

export interface StepStateTypes {
  steps: {
    step: number;
  };
}

// match types

interface MatchParams {
  id: string;
  id2?: string;
  changed?: string;
}

export interface MatchProps extends RouteComponentProps<MatchParams> {}

// models

export const SET_MODELS = "SET_MODELS";

interface SetModelsAction {
  type: typeof SET_MODELS;
  payload: ModelsData[];
}

export type ModelsActionTypes = SetModelsAction;

// schemes

export const SET_SCHEMES = "SET_SCHEMES";

interface SetSchemesAction {
  type: typeof SET_SCHEMES;
  payload: ShemesData[];
}

export type SchemesActionType = SetSchemesAction;

// wishes

export const SET_WISHES = "SET_WISHES";
export const SET_WISHES_STATUS = "SET_WISHES_STATUS";
export const SAVE_WISHES = "SAVE_WISHES";

export interface SetWishesPayload {
  wishes: WishesData[];
  scheme: number;
}

interface SetWishesAction {
  type: typeof SET_WISHES;
  payload: SetWishesPayload;
}

interface SetStatusAction {
  type: typeof SET_WISHES_STATUS;
  payload: string[];
}

export interface SaveWishesPayloadTypes {
  key1: string;
  key2: string;
  amount: string;
  price: string;
  index: number;
}

interface SaveWishesAction {
  type: typeof SAVE_WISHES;
  payload: SaveWishesPayloadTypes;
}

export type WishesActionType =
  | SetWishesAction
  | SetStatusAction
  | SaveWishesAction;

// purchase

export const SET_PURCHASES = "SET_PURCHASE";
export const SAVE_PURCHASES = "SAVE_PURCHASE";

interface SetPurchaseAction {
  type: typeof SET_PURCHASES;
  payload: PurchaseData[];
}

export type SavePurchasePayloadTypes = {
  index: number;
  price: number;
};

interface SavePurchaseAction {
  type: typeof SAVE_PURCHASES;
  payload: SavePurchasePayloadTypes;
}

export type PurchaseActionType = SetPurchaseAction | SavePurchaseAction;

// production

export const SET_PRODUCTION = "SET_PRODUCTION";
export const SET_PRODUCTION_STATUS = "SET_PRODUCTION_STATUS";

type SetProductionAction = {
  type: typeof SET_PRODUCTION;
  payload: ProductionData[];
};

type SetStatusProductionAction = {
  type: typeof SET_PRODUCTION_STATUS;
  payload: string[];
};

export type ProductionActionType =
  | SetProductionAction
  | SetStatusProductionAction;

// products

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SAVE_PRODUCTS = "SAVE_PRODUCTS";

interface SetPropductsAction {
  type: typeof SET_PRODUCTS;
  payload: ProductsData[];
}

export type PayloadSaveProductsAction = {
  index: number;
  values: {
    price: number;
    amount: number;
  };
};

type SaveProductsAction = {
  type: typeof SAVE_PRODUCTS;
  payload: PayloadSaveProductsAction;
};

export type ProductsActionType = SetPropductsAction | SaveProductsAction;

// steps

export const SET_STEP = "SET_STEP";

interface SetStepAction {
  type: typeof SET_STEP;
  payload: number;
}

export type StepsActionType = SetStepAction;

// budget

export const SET_BLOCKS_SELL = "SET_BLOCKS_SELL";
export const SET_BLOCKS_ADD = "SET_BLOCKS_ADD";

type SetBlocksSellAction = {
  type: typeof SET_BLOCKS_SELL;
  payload: WishesData[];
};

type SetBlocksAddAction = {
  type: typeof SET_BLOCKS_ADD;
  payload: BlocksData[];
};

export type BudgetActionTypes = SetBlocksSellAction | SetBlocksAddAction;
