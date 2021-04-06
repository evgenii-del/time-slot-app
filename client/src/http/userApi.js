import jwt_decode from 'jwt-decode';

import {$authHost, $host} from './index';

export const registration = async (username, password) => {
    const {data} = await $host.post('api/v1/user/registration', {username, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const login = async (username, password) => {
    const {data} = await $host.post('api/v1/user/login', {username, password});
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token);
};

export const check = async () => {
    const {data} = await $authHost.post('api/v1/user/auth');
    return jwt_decode(data.token);
};
