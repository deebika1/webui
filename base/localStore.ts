export const setSessionData = (key: any, value: any) => sessionStorage.setItem(key, value);
export const getSessionData = (key: any) => sessionStorage.getItem(key);