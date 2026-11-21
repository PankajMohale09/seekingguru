export interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  phno: string;
  country_code: string;
  password: string;
  fcmId: string;
}

export interface LoginPayload {
  emailOrPhone: string;
  password: string;
}

export interface AuthResponse {
  status: string;
  code: number;
  message: string;
  data?: {
    _id: string;
    login_token?: string;
    email?: string;
    [key: string]: any;
  };
}