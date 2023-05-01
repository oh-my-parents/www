import authManager from "@/utils/authManager/authManager";
import {authApi} from "@/apis";


const login = async (code:string) => {
  try {
    const kakaoPayload = await authApi.kakaoLogin(code);
    const token = await authApi.login(kakaoPayload);

    authManager.setAuth(token);
    return true;
  } catch (e) {
    // error logging
    return false;
  }
}


export default {
  login,
}