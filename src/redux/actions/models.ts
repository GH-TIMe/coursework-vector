import axios from "axios";
import { API_HOST, API_PATH } from "../../config";
import { SET_MODELS, ModelsActionTypes, ModelsData } from "../../types";
import { Action } from "redux";
import { RootState } from "../reducers/index";
import { ThunkAction } from "redux-thunk";

export const getModels = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => (dispatch) => {
  axios
    .get(`${API_HOST}/${API_PATH}/model_list`)
    .then(({ data: { models } }) => dispatch(setModels(models)));
};

export const setModels = (models: ModelsData[]): ModelsActionTypes => ({
  type: SET_MODELS,
  payload: models,
});

export const deleteModel = (
  selected: number[]
): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  axios
    .all(
      selected.map((id: number) =>
        axios.get(`${API_HOST}/${API_PATH}/${id}/delete`)
      )
    )
    .then(() => dispatch(getModels()));
};
