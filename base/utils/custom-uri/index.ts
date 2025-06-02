import { addEvent, removeEvent } from './../../service/socket';
import { appConfig } from './../../../base/utils/config';
import { clientutilityPostService } from '../../service';

export const openCustomUri = (header: any, payload: any, socketEvent: any, progressCb: any, socketRequired = true) => {
    header['version'] = appConfig.clientUtility.version;
    header['mode'] = appConfig.clientUtility.mode;
    return new Promise((resolve, reject) => {
        let uri = '';
        let cb = (data: any) => {
            if (data.status == 2) {
                if (socketRequired)
                    progressCb(data);
            } else {
                if (socketRequired)
                    removeEvent(socketEvent, cb);
                resolve(data);
            }
        }
        if (socketRequired)
            addEvent(socketEvent, cb);
        if (window.localStorage.getItem("IN_DESKTOP_ENV") == "true") {            
            uri = `http://localhost:${localStorage.getItem("api_port")}/iwms`;
           // post(uri,{"input":`${JSON.stringify(header)}${appConfig.clientUtility.delimitter}${JSON.stringify(payload)}`);
           clientutilityPostService(uri, {"input":`${JSON.stringify(header)}${appConfig.clientUtility.delimitter}${JSON.stringify(payload)}`}).then((response: any) => {
        }).catch((e: any) => {
            
        })
        }
        else {
            uri = `${appConfig.clientUtility.protocol}${JSON.stringify(header)}${appConfig.clientUtility.delimitter}${JSON.stringify(payload)}`;
            window.open(uri, appConfig.clientUtility.iframe);
        }

    });
}
