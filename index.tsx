import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './app';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ToastContainer } from 'react-toastify';
import { toastError } from "./shared/widgets/toaster";
import toastMsg from "./base/utils/toastMessage.json";
import 'react-toastify/dist/ReactToastify.css';

import { io } from 'socket.io-client';

const iAsocket = io("https://live-isocket-dev.azurewebsites.net/integra", {
    transports: ['websocket', 'polling', 'flashsocket']
});

export const createRoom = (id: string): any => {
    return new Promise<string>((resolve, reject) => {
        try {
            let docObj = {
                docID: id
            };
            iAsocket.on('createRoom', function (data) {
                let result = { isSuccess: true, systemName: "" };
                let Roomjoinedcount = JSON.parse(data).isRommJoined;
                if (Roomjoinedcount === 0) {
                    result.isSuccess = false;
                    iAsocket.emit('getClientInfo',docObj)
                    iAsocket.on('SendClientInfo', function (data) {
                        if (data.systemName) {
                            iAsocket.disconnect();
                            toastError(toastMsg.auth.SessionAvailable + `\n (${data.systemName})`);
                            setTimeout(() => {
                                window.localStorage.removeItem("wp");
                                window.localStorage.removeItem("wat");
                                window.location.assign(`/login`);
                                resolve(JSON.stringify(result));
                            }, 5000);
                        }
                    });
                } else {
                    iAsocket.on('SendClientInfo', function (data) {
                        if(window.localStorage.getItem("SYSTEM_NAME"))
                        iAsocket.emit('getClientInfo', { systemName: window.localStorage.getItem("SYSTEM_NAME") });
                    })
                    resolve(JSON.stringify(result));
                }
            });
            iAsocket.emit('createRoom', JSON.stringify(docObj));
        } catch (e) { resolve('{}') }
    });
}

ReactDOM.render(
  <Provider store={store}>
    <ToastContainer/>
    <App createRoom={createRoom}/>
    <iframe className="wms-custom-uri" name="wms-custom-uri-frame" />
    <iframe className="wms-download" name="wms-download-frame" />
  </Provider>,
  document.getElementById('root')
);
