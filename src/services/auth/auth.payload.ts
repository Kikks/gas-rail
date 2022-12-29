export type LoginPayload = {
  email: string;
  password: string;
};

export type RegisterPayload = {
  email: string;
  phone_number: string;
  first_name: string;
  last_name: string;
  password: string;
  business_name: string;
  business_address: string;
  business_role: string;
  rc_number: string;
};

export type RequestPasswordResetPayload = {
  email: string;
};

export type ResetPasswordPayload = {
  otp: string;
  email: string;
  password: string;
};

export type RequestEmailVerificationPayload = {
  email: string;
};

export type VerifyEmailPayload = {
  otp: string;
  email: string;
};
