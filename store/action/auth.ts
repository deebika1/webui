
import { AUTH_DETAILS, AUTH_PROFILE } from '../action';
import { AuthState, ProfileData } from '../model/auth';

export const dispatchAuthDetails = (dispatch: any, authDetails: AuthState) => {
    dispatch({ type: AUTH_DETAILS, authDetails });
};

export const dispatchAuthProfile = (dispatch: any, profile: ProfileData) => {
    dispatch({ type: AUTH_PROFILE, profile });
};