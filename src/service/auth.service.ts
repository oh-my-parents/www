import authManager from "@/utils/authManager/authManager";
import { authApi } from "@/apis";

const login = async (code: string) => {
  try {
    const kakaoPayload = await authApi.kakaoLogin(code);
    const { accessToken } = await authApi.login(kakaoPayload);

    authManager.setAuth(accessToken);
    return true;
  } catch (e) {
    return false;
  }
};

export default {
  login,
};
