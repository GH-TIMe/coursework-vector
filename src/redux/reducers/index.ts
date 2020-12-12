import { combineReducers } from "redux";

import models from "./models";
import schemes from "./schemes";
import wishes from "./wishes";
import purchase from "./purchase";
import production from "./production";
import products from "./products";
import steps from "./steps";
import budget from "./budget";

const root = combineReducers({
  models,
  schemes,
  wishes,
  purchase,
  production,
  products,
  steps,
  budget,
});

export type RootState = ReturnType<typeof root>;

export default root;
