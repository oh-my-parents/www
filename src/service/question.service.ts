import { questionApi } from "@/apis";

const getQuestions = async (parentType: parentType) => {
  try {
    const questions = await questionApi.question(parentType);
    return questions;
  } catch (e) {
    throw e;
  }
};

export default { getQuestions };
