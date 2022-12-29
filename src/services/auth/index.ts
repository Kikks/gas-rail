import { postRequest } from '../../utils/api/calls';
import type {
  LoginPayload,
  RegisterPayload,
  RequestEmailVerificationPayload,
  RequestPasswordResetPayload,
  ResetPasswordPayload,
  VerifyEmailPayload,
} from './auth.payload';

export const loginUser = (data: LoginPayload) => {
  return postRequest({
    url: '/auth/login',
    data,
  });
};

export const registerUser = (data: RegisterPayload) => {
  return postRequest({
    url: '/auth/register',
    data,
  });
};

export const requestPasswordRequest = (data: RequestPasswordResetPayload) => {
  return postRequest({
    url: '/auth/password-reset',
    data,
  });
};

export const resetPassword = (data: ResetPasswordPayload) => {
  return postRequest({
    url: '/auth/reset-password',
    data,
  });
};

export const requestEmailVerification = (
  data: RequestEmailVerificationPayload
) => {
  return postRequest({
    url: '/auth/email-verification',
    data,
  });
};

export const verifyEmail = (data: VerifyEmailPayload) => {
  return postRequest({
    url: '/auth/verify-email',
    data,
  });
};
