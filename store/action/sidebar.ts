import { IS_EXPANDED, MENU_DATA } from "../action";

export const dispatchSidebarExpanded = (dispatch: any, isExpanded: any, isSideBar?: any) => {
    

    
    

    dispatch({ type: IS_EXPANDED, isExpanded, isSideBar: isSideBar === undefined ? true : false });
};

export const dispatchSidebarMenuDetails = (dispatch: any, menuDetails: any) => {
    dispatch({ type: MENU_DATA, menuDetails });
};