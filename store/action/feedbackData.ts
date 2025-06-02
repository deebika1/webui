import {
    SET_FEEDBACK_DATA,
    SET_FEEDBACK_FILTERED_DATA,
    SET_FEEDBACK_COLUMNS_DATA,
  } from "../action";
  
  
  export const updateFeedbackData = (index: any, newData: any) => ({
    type: SET_FEEDBACK_DATA,
    index,
    newData,
  });

  export const updateFeedbackFilteredData = (index: any, newData: any) => ({
    type: SET_FEEDBACK_FILTERED_DATA,
    index,
    newData,
  }
  );
  export const updateFeedbackColumnsData = (index: any, newData: any) => ({
    type: SET_FEEDBACK_COLUMNS_DATA,
    index,
    newData,
  }
  );
  