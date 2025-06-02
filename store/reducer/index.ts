import { combineReducers } from 'redux';
import { authReducer } from './auth';
import { sidebarReducer } from './sidebar';
import { viewFilterReducer } from "./viewFilter";
import { viewFeedbackFilterReducer } from './viewFeedbackFilter';
import { appreciationReducer } from './appreciationData';
import { feedbackReducer } from './feedbackData';

export const rootReducer = combineReducers({
    authReducer,
    sidebarReducer,
    viewFilterReducer,
    viewFeedbackFilterReducer,
    appreciationReducer,
    feedbackReducer
});