import { KAKAO } from "@/constants/api.constants";
import { kakaoPayload, Auth } from "./types";
import fetcher from "../fecther";

const login = async (token: { token: string }) => {
  const { data } = await fetcher.post<ResponseContainer<Auth>>(
    "/auth/kakao",
    token,
  );

  if (data.code !== 200) throw new Error(data.message);
  return data.data;
};

const kakaoLogin = async (code: string) => {
  const requestData = {
    grant_type: KAKAO.GRANT_TYPE,
    client_id: KAKAO.REST_API_KEY,
    redirect_uri: KAKAO.REDIRECT_URI,
    code,
  };

  const { data } = await fetcher.post<kakaoPayload>(
    "/oauth/token",
    requestData,
    {
      baseURL: KAKAO.OAUTH_HOST,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    },
  );

  return { token: data.access_token };
};

export default {
  login,
  kakaoLogin,
};
