import {KAKAO} from "@/constants/api.constants";
import { kakaoPayload, authTokens } from "./types";
import fetcher from "../fecther";

const login = async (payload: kakaoPayload) =>{
  const {data} = await fetcher.post<authTokens>("/auth/login", payload);

  return data;
}

const kakaoLogin = async (code:string) => {
  const requestData = {
    grant_type: KAKAO.GRANT_TYPE,
    client_id: KAKAO.REST_API_KEY,
    redirect_uri : KAKAO.REDIRECT_URI,
    code
  };
  
  const {data} = await fetcher.post<kakaoPayload>('/oauth/token', requestData, {
    baseURL: KAKAO.OAUTH_HOST,
    headers:{ "Content-Type": "application/x-www-form-urlencoded"}
  });

  return {
    access_token: data.access_token,
    refresh_token: data.refresh_token,
    expires_in: data.expires_in,
    refresh_token_expires_in: data.refresh_token_expires_in,
  };
}


export default {
  login,
  kakaoLogin
}