import { invokePostService } from "../base/service";
import { appConfig } from "../base/utils/config";

export const navigateToLogin = () => {
    window.location.assign(`/login`);
};

export const signOut = () => {
    const url = appConfig.auth.uri.signout;
    localStorage.removeItem('FromMail');
    localStorage.removeItem('ViewID');
    localStorage.removeItem('isProductionPage');

    localStorage.removeItem("currentfeedbackID");
    localStorage.removeItem("despatcData");
    localStorage.removeItem("isDownload");
    localStorage.removeItem("WorkingFolder");
    localStorage.removeItem("isInstructionCheck");

    sessionStorage.removeItem("prePath");
    sessionStorage.removeItem("fromPage");
    sessionStorage.removeItem("isAnyFileUploaded");

    localStorage.removeItem("wp");
    localStorage.removeItem("wat");

    localStorage.removeItem("customer");
    localStorage.removeItem("chChapter");
    localStorage.removeItem("chBookCode");
    localStorage.removeItem("chCustomer");
    localStorage.removeItem("dbBookCode");
    localStorage.removeItem("bkbookCode");
    localStorage.removeItem("bkcustomer");
    localStorage.removeItem("atchapter");
    localStorage.removeItem("atcustomer");
    localStorage.removeItem("atbookCode");
    localStorage.removeItem("repbookCode");
    localStorage.removeItem("repchapter");
    localStorage.removeItem("repcustomer");
    localStorage.removeItem("bookCode");
    localStorage.removeItem("chapter");
    localStorage.removeItem("activity");
    localStorage.removeItem("tabIndex");
    localStorage.removeItem("dbcustomer");
    localStorage.removeItem("dbPM");

    if( window.localStorage.getItem("IN_DESKTOP_ENV")=="true"){
        // localStorage.removeItem('api_port');
        // localStorage.removeItem('SYSTEM_NAME');
        // localStorage.removeItem('USER_NAME');
        // window.localStorage.removeItem("wp")
        // window.localStorage.removeItem("wat")
      }
    invokePostService(url, {}).then((res: any) => {
        window.location.assign(`/login`);
    });
};
