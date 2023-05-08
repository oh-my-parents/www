import { userApi } from "@/apis";
import { parentType } from "@/apis/question/type";

const getScore = async (parentType: parentType) => {
  const data = await userApi.user.getScore(parentType);

  return data;
};

const getResults = async (parentType: parentType) => {
  const data = await userApi.user.getResults(parentType);

  return data;
};

const submitAnswer = async (parentType: parentType, answers: string[]) => {
  const userChildAnswers = answers.map((answer, index) => {
    return {
      number: index + 1,
      answer,
    };
  });

  const data = await userApi.user.submitAnswer({
    parentType,
    userChildAnswers,
  });

  return data;
};

const getUserName = async () => {
  const data = await userApi.user.getUserName();

  return data;
};

const setUserName = async (name: string) => {
  const data = await userApi.user.setUserName(name);

  return data;
};

const signOut = async () => {
  const data = await userApi.user.signOut();

  return data;
};

export default {
  getScore,
  getResults,
  submitAnswer,
  getUserName,
  setUserName,
  signOut,
};
