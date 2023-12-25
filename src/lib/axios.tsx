import Axios, { InternalAxiosRequestConfig } from 'axios';

import { API_URL } from '@/config';
import storage from '@/utils/storage';
import { addNotification } from '@/stores/notificationSlice';
import { store } from '@/stores';

function authRequestInterceptor(config: InternalAxiosRequestConfig<any>) {
  const token = storage.getToken();
  if (token) {
    config.headers.Authorization = `${token}`;
  }
  config.headers.Accept = "application/json"
  return config;
}

export const axios = Axios.create({
  baseURL: API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const message = error.response?.data?.message || error.message;
    store.dispatch(addNotification({
      type: 'error',
      title: 'Error',
      message,
    }));

    return Promise.reject(error);
  }
);