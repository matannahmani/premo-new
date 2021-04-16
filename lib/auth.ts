import { AxiosRequestConfig, AxiosResponse } from 'axios';
import Server from '@api/index';

export function checkEmailExistsAPI(
  req: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.get('/v1/user/exist', req);
}

export function sendUserCreateEmailAPI(
  req: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.post('/v1/user/send-user-create-email', req.data, req);
}

export function sendPasswordResetEmailAPI(
  req: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.post('/v1/user/reset-password', req.data, req);
}

export function createFirebaseUserAPI(
  req: AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.post('/v1/user/create-through-firebase', req.data, req);
}

export function getUserInfoAPI(
  req:AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.get('/v1/user', req);
}

export function updateUserInfoAPI(
  data: any,
  config:AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.put('/v1/user/'+data.id, data, config);
}

export function deleteUserInfoAPI(
  data: any,
  config:AxiosRequestConfig,
): Promise<AxiosResponse> {
  return Server.delete('/v1/user/'+data.id, config);
}

export function sendConsultingEmailAPI(
  req:AxiosRequestConfig,
) : Promise<AxiosResponse> {
  return Server.post('/v1/user/put-consult-email', req.data);
}