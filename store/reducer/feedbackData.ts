import { SET_FEEDBACK_DATA,
  SET_FEEDBACK_FILTERED_DATA, SET_FEEDBACK_COLUMNS_DATA } from "../action";

export const initialState = {
    feedbackData: [],
    feedbackFilteredData:[],
    feedbackColumnsData:[],
  };
  

export const feedbackReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_FEEDBACK_DATA:
        return {
          ...state,
          feedbackData: action.newData,
        };
      case SET_FEEDBACK_FILTERED_DATA:
        return {
          ...state,
          feedbackFilteredData: action.newData,
        };
        case SET_FEEDBACK_COLUMNS_DATA:
          return {
            ...state,
            feedbackColumnsData: action.newData,
          };
      default:
        return state;
    }
  };
  