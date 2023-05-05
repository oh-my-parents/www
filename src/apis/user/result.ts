import fetcher from "../fecther";
import { parentType } from "../question/type";

const getScore = async (parentType: parentType) => {
  try {
    const { data } = await fetcher.post("/user/score", { parentType });
    if (data.code !== 200) throw new Error(data.message);

    return data.data;
  } catch (e) {
    throw Error("Unknown Error");
  }
};

const getResults = async (parentType: parentType) => {
  const { data } = await fetcher.post("/user/result", { parentType });
  if (data.code !== 200) throw new Error(data.message);

  return data.data;
};

export default {
  getScore,
  getResults,
};
