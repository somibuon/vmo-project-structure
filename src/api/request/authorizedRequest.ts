import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import message from 'antd/lib/message';
import CONFIG from '../../config';
import { tokenManager } from './tokenManager';

const authorizedRequest: AxiosInstance = axios.create({
  baseURL: CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

authorizedRequest.interceptors.request.use((config: AxiosRequestConfig) => {
  const newConfig = { ...config };
  const { token } = tokenManager;
  newConfig.headers.common.Authorization =
    token && token !== 'guest' ? `Bearer ${token}` : '';
  return newConfig;
});

authorizedRequest.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    if (error && error.response && error.response.status === 401) {
      message.error('Session expired');
    }
    throw error;
  },
);

export default authorizedRequest;
