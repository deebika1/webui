import {
  RESET_TO_INITIAL,
  UPDATE_FILTER,
  UPDATE_SEARCH_TEXT,
  REMOVE_SEARCH_TEXT
} from "../action";


export const updateFilter = (index: any, newData: any) => ({
  type: UPDATE_FILTER,
  index,
  newData,
});
export const resetFilter = () => ({
  type: RESET_TO_INITIAL,
});
export const updateSearchText = (index: any, newData: any) => ({
  type: UPDATE_SEARCH_TEXT,
  index,
  newData,
});
export const removeSearchText = () => ({
  type: REMOVE_SEARCH_TEXT,
  
});