import { io } from "socket.io-client";
import { store } from './../../store/store';
import { appConfig } from './../utils/config';

let socket: any;
let socketServer: any;

export const establishSocket = () => {
    return new Promise((resolve, reject) => {
        socket = io(appConfig.server.getSocketUrl(), {
            transports: ['websocket', 'polling', 'flashsocket'],
            upgrade: false,
            query: { 'sesId': getSessionId() }
        });
        socket.on('connect', () => {
            resolve(socket);
        });
    });
};

export const establishSocketServer = () => {
    return new Promise((resolve, reject) => {
        socketServer = io(appConfig.server.getSocketServerUrl(), {
            transports: ['websocket', 'polling', 'flashsocket'],
            upgrade: false,
            query: { 'sesId': getSessionId(), 'profileId': store.getState().authReducer.profile.id }
        });
        socketServer.on('connect', () => {
            resolve(socketServer);
        });
    });
};

export const addEvent = (name: string, cb: <T>(data: T) => void) => {
    if (socket)
        socket.on(name, cb);
    if (socketServer)
        socketServer.on(name, cb);
};

export const removeEvent = (name: string, cb: <T>(data: T) => void) => {
    if (socket)
        socket.off(name, cb);
    if (socketServer)
        socketServer.off(name, cb);
};

export const getSessionId = () => store.getState().authReducer.sessionId;

export const disconnectSocket = () => {
    if (socket)
        socket.disconnect();
    if (socketServer)
        socketServer.disconnect();
}

export const getConnectionStatus = () => socket && socket.connected;
