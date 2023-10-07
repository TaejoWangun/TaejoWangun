import { AxiosError } from 'axios';
import API from '../main';
import setToken from '../../lib/auth/setToken';

export const signUp = async (
  userId: string,
  email: string,
  password: string,
) => {
  try {
    const response = await API.post('/users/direct', {
      userId,
      email,
      password,
    });

    return response;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;

      return message;
    }
    return '';
  }
};

export const signIn = async (username: string, password: string) => {
  try {
    const response = await API.post('/auth/direct', {
      username,
      password,
    });

    setToken({ key: 'accessToken', value: response.data.accessToken });

    return response;
  } catch (e) {
    if (e instanceof AxiosError) {
      const message = e.response?.data.message;

      return message;
    }
    return '';
  }
};
