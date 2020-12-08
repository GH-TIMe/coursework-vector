import { SET_STEP, StepsActionType } from "../../types";

export const setStep = (step: number): StepsActionType => ({
  type: SET_STEP,
  payload: step,
});
