import axios from 'axios';
import { toastError } from '../shared/widgets/toaster';
import { appConfig } from './../base/utils/config';
import { navigateToLogin, signOut } from './helper';
import toastMsg from './../base/utils/toastMessage.json';

let isAcknowledgedError = false;
axios.interceptors.request.use((request) => {
    request.headers['IWMS-Web-App'] = true;
    return request;
}
);

axios.interceptors.response.use(
    response => {
        const { status } = response;
        const { type } = response.data;
        if (status == 200 && type == 'NewSession' && response.config.url && response.config.url.indexOf(appConfig.server.getUrl()) !== -1) {
            if (!isAcknowledgedError) {
                navigateToLogin();
                return Promise.reject('New Session');
            }
            isAcknowledgedError = true;
        }
        return response;
    },
    error => {
        // toastError(error.message);
        const { status } = error.response;
        const { type, message } = error.response.data;
        if (status == 401 && error.config.url.indexOf(appConfig.server.getUrl()) !== -1) {
            if (!isAcknowledgedError) {
                if (type == 'InvalidToken') {
                    navigateToLogin();
                } else {
                    if (type == 'UserNotExist') {
                        toastError(toastMsg.auth.userNotExist);
                    } else if (type == 'InvalidProfile') {
                        toastError(toastMsg.auth.InvalidProfile);
                    } else {
                        toastError(message ? message : error);
                    }
                    setTimeout(signOut, 2000);
                }
            }
            isAcknowledgedError = true;
        }
        return Promise.reject(error);
    }
);