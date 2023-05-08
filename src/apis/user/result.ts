import fetcher from "../fecther";
import { parentType } from "../question/type";

type Result = {
  userResults: [
    {
      questionNumber: number;
      qusetion: string;
      parentType: parentType;
      childAnswer: string;
      parentScore: number;
    },
  ];
};

const getScore = async (parentType: parentType) => {
  const { data } = await fetcher.post<
    ResponseContainer<{ name: string; score: number }>
  >("/user/score", { parentType });
  if (data.code !== 200) throw new Error(data.message);
  return data.data;
};

/**
 * unsued
 */
const getResults = async (parentType: parentType) => {
  const { data } = await fetcher.post<ResponseContainer<Result>>(
    "/user/result",
    { parentType },
  );
  if (data.code !== 200) throw new Error(data.message);

  return data.data.userResults;
};

export default {
  getScore,
  getResults,
};
