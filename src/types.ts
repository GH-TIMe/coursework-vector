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

export type StatusInfo = { status: boolean };

export type StatusType = Record<
  string,
  StatusInfo | Record<string, StatusInfo>
>;

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

export interface StepStateTypes {
  steps: {
    step: number;
  };
}

// match types

interface MatchParams {
  id: string;
  id2?: string;
  changed?: "0" | "1";
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
export const CLEAR_WISHES_REQUEST = "CLEAR_WISHES_REQUEST";
export const EXPAND_ALL_WISHES = "EXPAND_ALL_WISHES";
export const CLOSE_ALL_WISHES = "CLOSE_ALL_WISHES";
export const SET_WISHES_LOADED = "SET_WISHES_LOADED";

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

interface ClearWishesRequest {
  type: typeof CLEAR_WISHES_REQUEST;
}

interface ExpandAllWishes {
  type: typeof EXPAND_ALL_WISHES;
}

interface CloseAllWishes {
  type: typeof CLOSE_ALL_WISHES;
}

interface SetWishesLoaded {
  type: typeof SET_WISHES_LOADED;
  payload: boolean;
}

export interface SaveWishesPayloadTypes {
  id: number;
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
  | SaveWishesAction
  | ClearWishesRequest
  | ExpandAllWishes
  | CloseAllWishes
  | SetWishesLoaded;

// purchase

export const SET_PURCHASES = "SET_PURCHASE";
export const SAVE_PURCHASES = "SAVE_PURCHASE";
export const CLEAR_PURCHASE_REQUEST = "CLEAR_PURCHASE_REQUEST";
export const SET_PURCHASE_LOADED = "SET_PURCHASE_LOADED";

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

export type ClearPurchaseRequest = {
  type: typeof CLEAR_PURCHASE_REQUEST;
};

interface SetPurchaseLoaded {
  type: typeof SET_PURCHASE_LOADED;
  payload: boolean;
}

export type PurchaseActionType =
  | SetPurchaseAction
  | SavePurchaseAction
  | ClearPurchaseRequest
  | SetPurchaseLoaded;

// production

export const SET_PRODUCTION = "SET_PRODUCTION";
export const SET_PRODUCTION_STATUS = "SET_PRODUCTION_STATUS";
export const EXPAND_ALL_PRODUCTION = "EXPAND_ALL_PRODUCTION";
export const CLOSE_ALL_PRODUCTION = "CLOSE_ALL_PRODUCTION";
export const SET_PRODUCTION_LOADED = "SET_PRODUCTION_LOADED";

type SetProductionAction = {
  type: typeof SET_PRODUCTION;
  payload: ProductionData[];
};

type SetStatusProductionAction = {
  type: typeof SET_PRODUCTION_STATUS;
  payload: string[];
};

type ExpandAllProduction = {
  type: typeof EXPAND_ALL_PRODUCTION;
};

type CloseAllProduction = {
  type: typeof CLOSE_ALL_PRODUCTION;
};

type SetProductionLoaded = {
  type: typeof SET_PRODUCTION_LOADED;
  payload: boolean;
};

export type ProductionActionType =
  | SetProductionAction
  | SetStatusProductionAction
  | ExpandAllProduction
  | CloseAllProduction
  | SetProductionLoaded;

// products

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SAVE_PRODUCTS = "SAVE_PRODUCTS";
export const CLEAR_PRODUCTS_REQUEST = "CLEAR_PRODUCTS_REQUEST";
export const SET_PRODUCTS_LOADED = "SET_PRODUCTS_LOADED";

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

type ClearProductsRequest = {
  type: typeof CLEAR_PRODUCTS_REQUEST;
};

type SetProductsLoaded = {
  type: typeof SET_PRODUCTS_LOADED;
  payload: boolean;
};

export type ProductsActionType =
  | SetPropductsAction
  | SaveProductsAction
  | ClearProductsRequest
  | SetProductsLoaded;

// steps

export const SET_STEP = "SET_STEP";

interface SetStepAction {
  type: typeof SET_STEP;
  payload: number;
}

export type StepsActionType = SetStepAction;

// budget

export const SET_BLOCKS_SELL = "SET_BLOCKS_SELL";
export const SET_BLOCKS_SELL_STATUS = "SET_BLOCKS_SELL_STATUS";
export const SET_BLOCKS_ADD = "SET_BLOCKS_ADD";
export const EXPAND_ALL_SELL = "EXPAND_ALL_SELL";
export const CLOSE_ALL_SELL = "CLOSE_ALL_SELL";

type SetBlocksSellAction = {
  type: typeof SET_BLOCKS_SELL;
  payload: WishesData[];
};

type SetBlocksAddAction = {
  type: typeof SET_BLOCKS_ADD;
  payload: BlocksData[];
};

type SetBlocksSellStatus = {
  type: typeof SET_BLOCKS_SELL_STATUS;
  payload: string[];
};

type ExpandAllSell = {
  type: typeof EXPAND_ALL_SELL;
};

type CloseAllSell = {
  type: typeof CLOSE_ALL_SELL;
};

export type BudgetActionTypes =
  | SetBlocksSellAction
  | SetBlocksAddAction
  | SetBlocksSellStatus
  | ExpandAllSell
  | CloseAllSell;

// clients

export type Client = {
  id: string;
  name: string;
};

export const SET_CLIENTS = "SET_CLIENTS";

type SetClient = {
  type: typeof SET_CLIENTS;
  payload: Client[];
};

export type AddModelTypes = SetClient;
