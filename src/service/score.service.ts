import { scoreApi } from "@/apis";

const getScore = async () => {
  try {
    const score = await scoreApi.score();
    return score;
  } catch (e) {
    return false;
  }
};

export default { getScore };
