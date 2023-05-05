import { userApi } from "@/apis";

const getScore = async () => {
  try {
    const score = await userApi.user.getScore("FATHER");
    return score;
  } catch (e) {
    return false;
  }
};

export default { getScore };
