import fetcher from "@/apis/fecther";
import {
  ParentAnswerRequest,
  ParentAnswerResponse,
  ShowChildAnswerRequest,
} from "./type";
/**
 * 자식이 제출한 parentType의 값
 * @param requstData - 자식의 id값, 부모의 타입
 * @returns
 */
const showChildAnswer = async (requstData: ShowChildAnswerRequest) => {
  const response = await fetcher.post("/user/parent/question", requstData);
  console.log(response);
  return response.data;
};

const submitAnswer = async (requestData: ParentAnswerRequest) => {
  const response = await fetcher.post<ParentAnswerResponse>(
    "/user/parent/answer",
    requestData,
  );
  console.log(response);
  return response.data;
};

export default {
  showChildAnswer,
  submitAnswer,
};
