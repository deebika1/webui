import { IS_EXPANDED, MENU_DATA } from "../action";

const initialState = {
    isExpanded: true,
    menu: {},
    isSideBar: true
};

export const sidebarReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case IS_EXPANDED:
            return { ...state, isExpanded: action.isExpanded, isSideBar: action.isSideBar };
        case MENU_DATA:
            return { ...state, ...action.menuDetails };
        default:
            return state;
    }
}