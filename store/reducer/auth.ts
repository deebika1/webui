import { AUTH_DETAILS, AUTH_PROFILE } from '../action';
import { AuthState } from '../model/auth';

const initialAuthState: AuthState = {
    isLoggedIn: false,
    profile: {
        id: '',
        username: '',
        duId: '',
        duName: '',
        defaultRole: { id: '', name: '' },
        role: { id: '', name: '' },
        roles: { id: [], name: [] },
        skills: { id: [], name: [] },
        workOrderId: undefined,
        bookId: undefined,
        customerId: undefined,
        wfid: 0
    },
    screensInfo: {},
    sessionId: ""
};

export const authReducer = (state = initialAuthState, action: any) => {
    switch (action.type) {
        case AUTH_DETAILS:
            return { ...state, ...action.authDetails };
        case AUTH_PROFILE: {
            return { ...state, profile: action.profile };
        }
        default:
            return state;
    }
}