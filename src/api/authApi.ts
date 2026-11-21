import { apiClient } from './clients';
// Use 'import type' for TypeScript interfaces and types
import { type RegisterPayload, type LoginPayload, type AuthResponse } from '../types/auth.types';

export const registerApi = async (payload: RegisterPayload): Promise<AuthResponse> => {
  const formData = new FormData();
  Object.entries(payload).forEach(([key, value]) => {
    formData.append(key, value);
  });

  const response = await apiClient.post<AuthResponse>('/api/user/register', formData);
  return response.data;
};

export const loginApi = async (payload: LoginPayload): Promise<AuthResponse> => {
  const formData = new FormData();
  formData.append('email', payload.emailOrPhone); 
  formData.append('password', payload.password);

  const response = await apiClient.post<AuthResponse>('/api/user/login', formData);
  return response.data;
};