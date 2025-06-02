import { RESET_TO_FEEDBACK_INITIAL, UPDATE_FEEDBACK_FILTER } from "../action";

export const initialState = {
  feedbackFilter: [],
};
export const viewFeedbackFilterReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case RESET_TO_FEEDBACK_INITIAL:
      return {
        feedbackFilter: [],
      }

    case UPDATE_FEEDBACK_FILTER:
      return {
        ...state,
        feedbackFilter:action.newData,
      };

    default:
      return state;
  }
};
