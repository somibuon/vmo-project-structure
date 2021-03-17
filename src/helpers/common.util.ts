import { AxiosError } from 'axios';
import { COMMON } from '../constants/error';

type E = string | AxiosError;

export function getMessageFromError(error: E) {
  if (typeof error === 'string') {
    return error;
  }
  if (error.response) {
    return error?.response?.data?.message || COMMON;
  }
  return error.message || COMMON;
}

export function decodeToken(token: string) {
  try {
    const payload = token.split('.')[1];
    const parsed = atob(payload);
    return JSON.parse(parsed);
  } catch (e) {
    return null;
  }
}
