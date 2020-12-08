import { SET_STEP, StepsActionType } from "../../types";

interface stateTypes {
  step: number;
}

const initialState: stateTypes = {
  step: 0,
};

const steps = (state = initialState, action: StepsActionType): stateTypes => {
  switch (action.type) {
    case SET_STEP: {
      return {
        ...state,
        step: action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default steps;
