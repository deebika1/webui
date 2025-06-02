import {
  PUSH_FEEDBACK_FILTER,
  REMOVE_FEEDBACK_FILTER,
  RESET_TO_FEEDBACK_INITIAL,
  UPDATE_FEEDBACK_FILTER,
} from "../action";

export const pushFeedbackFilter = (filter: any, newData: any) => ({
  type: PUSH_FEEDBACK_FILTER,
  filter,
  newData,
});

export const removeFeedbackFilter = (index: any) => ({
  type: REMOVE_FEEDBACK_FILTER,
  index,
});

export const updateFeedbackFilter = (index: any, newData: any) => ({
  type: UPDATE_FEEDBACK_FILTER,
  index,
  newData,
});
export const resetFeedbackFilter = () => ({
  type: RESET_TO_FEEDBACK_INITIAL,
});
