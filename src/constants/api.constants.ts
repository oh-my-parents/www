const HOST = import.meta.env.VITE_APP_HOST;
const PREFIX = "api";
const VERSION = "v1";

export const BASE_URL = `${HOST}/${PREFIX}/${VERSION}`;
export const DEFAULT_TIME_OUT = 10_000;
export const AUTH_REQUIRED_REGEX_LIST: RegExp[] = [/users/];


export const KAKAO = Object.freeze({
  OAUTH_HOST: "https://kauth.kakao.com",
  REST_API_KEY: import.meta.env.VITE_APP_KAKAO_API_KEY,
  REDIRECT_URI: `${HOST}/oauth`,
  GRANT_TYPE: "authorization_code",
});


export const KAKAO_BUTTON_URL = `${KAKAO.OAUTH_HOST}/oauth/authorize?client_id=${KAKAO.REST_API_KEY}&redirect_uri=${KAKAO.REDIRECT_URI}&response_type=code`;




  