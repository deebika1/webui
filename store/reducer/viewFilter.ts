import {
  RESET_TO_INITIAL,
  UPDATE_FILTER,
  UPDATE_SEARCH_TEXT,
  REMOVE_SEARCH_TEXT,
} from "../action";

export const initialState = {
  appreciationFilter: [],
  apprSearch: '',
};

export const viewFilterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case RESET_TO_INITIAL:
      return {
        appreciationFilter: [],
      };
    case REMOVE_SEARCH_TEXT:
      return {
        apprSearch: '',
      };

    case UPDATE_FILTER:
      return {
        ...state,
        appreciationFilter: action.newData,
      };

    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        apprSearch: action.newData,
      };

    default:
      return state;
  }
};
