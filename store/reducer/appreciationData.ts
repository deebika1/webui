import { SET_APPRECIATION_DATA,
  SET_APPRECIATION_FILTERED_DATA,
  SET_APPRECIATION_COLUMNS_DATA,} from "../action";
// import { tabledata } from "../model/auth";

export const initialState = {
    appreciationData: [],
    appreciationFilteredData:[],
    appreciationColumnsData:[],
  };
  

export const appreciationReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case SET_APPRECIATION_DATA:
        return {
          ...state,
          appreciationData: action.newData,
        };
      case SET_APPRECIATION_FILTERED_DATA:
        return {
          ...state,
          appreciationFilteredData: action.newData,
        };
      case SET_APPRECIATION_COLUMNS_DATA:
        return {
          ...state,
          appreciationColumnsData: action.newData,
        };
      default:
        return state;
    }
  };
  