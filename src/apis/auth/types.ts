export type kakaoPayload = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
};

export type Auth = {
  token: string;
};
