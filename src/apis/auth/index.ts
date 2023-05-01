import {KAKAO} from "@/constants/api.constants";
import { kakaoPayload, Auth } from "./types";
import fetcher from "../fecther";

const login = async (payload: kakaoPayload) =>{
  const requsetData = {
      accessToken: payload.access_token,
      refreshToken: payload.refresh_token,
      expiresIn: payload.expires_in,
      refreshTokenExpiresIn: payload.refresh_token_expires_in,
  }
  const {data} = await fetcher.post<Auth>("/auth/login", requsetData);

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

  return data;
}


export default {
  login,
  kakaoLogin
}