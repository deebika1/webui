import {
    SET_APPRECIATION_DATA,
    SET_APPRECIATION_FILTERED_DATA,
    SET_APPRECIATION_COLUMNS_DATA
  } from "../action";
  
  
  export const updateApprData = (index: any, newData: any) => ({
    type: SET_APPRECIATION_DATA,
    index,
    newData,
  }
  );
  export const updateApprFilteredData = (index: any, newData: any) => ({
    type: SET_APPRECIATION_FILTERED_DATA,
    index,
    newData,
  }
  );
  export const updateApprColumnsData = (index: any, newData: any) => ({
    type: SET_APPRECIATION_COLUMNS_DATA,
    index,
    newData,
  }
  );