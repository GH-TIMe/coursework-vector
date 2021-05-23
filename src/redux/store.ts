import { createStore, applyMiddleware, compose, AnyAction } from "redux";
import root, { RootState } from "./reducers";
import thunk, { ThunkDispatch } from "redux-thunk";
import { TypedUseSelectorHook, useSelector } from "react-redux";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(root, composeEnhancers(applyMiddleware(thunk)));

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
