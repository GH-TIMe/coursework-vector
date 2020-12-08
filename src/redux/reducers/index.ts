import { combineReducers } from "redux";

import models from "./models";
import schemes from "./schemes";
import wishes from "./wishes";
import purchase from "./purchase";
import production from "./production";
import products from "./products";
import steps from "./steps";

const root = combineReducers({
  models,
  schemes,
  wishes,
  purchase,
  production,
  products,
  steps,
});

export type RootState = ReturnType<typeof root>;

export default root;
