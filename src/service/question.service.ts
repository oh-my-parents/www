import { questionApi } from "@/apis";
import { parentType } from "@/apis/question/type";

const getQuestions = async (parentType: parentType) => {
  try {
    const questions = await questionApi.question(parentType);
    return questions;
  } catch (e) {
    throw e;
  }
};

export default { getQuestions };
