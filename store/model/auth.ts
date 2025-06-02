export interface ProfileData {
  workOrderId: string | undefined;
  bookId: string | undefined;
  customerId: string | undefined;
  wfid: number;
  id: string;
  username: string;
  duId: string;
  duName: string;
  defaultRole: AuthKeyValuePair;
  role: AuthKeyValuePair;
  roles: AuthKeyValuePairs;
  skills: AuthKeyValuePairs;
}

interface AuthKeyValuePairs {
  id: string[];
  name: string[];
}
interface AuthKeyValuePair {
  id: string;
  name: string;
}

export interface ScreenInfo {
  name: string;
  id: string;
  path: string;
  menuId: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  profile: ProfileData;
  sessionId: string;
  screensInfo: { [key: string]: ScreenInfo };
}
export interface filterSate {
  appreciation: any;
}
export interface feedbackfilterSate {
  feedback: any;
}
