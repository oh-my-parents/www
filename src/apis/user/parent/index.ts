import fetcher from "@/apis/fecther";
import {
  ParentAnswerRequest,
  ParentAnswerResponse,
  GetChildAnswerRequest,
  GetChildAnswerResponse,
} from "./type";
/**
 * 자식이 제출한 parentType의 값
 * @param requstData - 자식의 id값, 부모의 타입
 * @returns
 */
const getAnswer = async (requstData: GetChildAnswerRequest) => {
  const { data } = await fetcher.post<GetChildAnswerResponse>(
    "/user/parent/question",
    requstData,
  );

  if (data.code !== 200) throw data.message;

  const result = {
    name: data.data.name,
    answered: data.data.answered,
    answers: data.data.userQuestionWithChildAnswers,
  };
  return result;
};

const submitAnswer = async (requestData: ParentAnswerRequest) => {
  const { data } = await fetcher.post<ParentAnswerResponse>(
    "/user/parent/answer",
    requestData,
  );
  if (data.code !== 200) throw data.message;

  return data.data;
};

export default {
  getAnswer,
  submitAnswer,
};
