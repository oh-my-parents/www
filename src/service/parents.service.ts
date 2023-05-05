import { userApi } from "@/apis";
import {
  GetChildAnswerRequest,
  ParentAnswerRequest,
} from "@/apis/user/parent/type";

const getAnswer = async (requstData: GetChildAnswerRequest) => {
  const data = await userApi.parent.getAnswer(requstData);

  return data;
};

const submitAnswer = async (requestData: ParentAnswerRequest) => {
  const data = await userApi.parent.submitAnswer(requestData);

  return data;
};

export default {
  getAnswer,
  submitAnswer,
};
