import { ModelsData, SET_MODELS, ModelsActionTypes } from "../../types";

interface stateTypes {
  models: ModelsData[];
}

const initialState: stateTypes = {
  models: [],
};

const models = (
  state = initialState,
  action: ModelsActionTypes
): stateTypes => {
  switch (action.type) {
    case SET_MODELS: {
      return {
        ...state,
        models: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default models;
