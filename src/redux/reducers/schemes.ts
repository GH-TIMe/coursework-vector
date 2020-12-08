import { SET_SCHEMES, ShemesData, SchemesActionType } from "../../types";

interface StateTypes {
  schemes: ShemesData[];
}

const initialState: StateTypes = {
  schemes: [],
};

const schemes = (
  state = initialState,
  action: SchemesActionType
): StateTypes => {
  switch (action.type) {
    case SET_SCHEMES: {
      return {
        ...state,
        schemes: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export default schemes;
