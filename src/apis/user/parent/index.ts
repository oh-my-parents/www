import fetcher from "@/apis/fecther";
import {
  ParentAnswerRequest,
  ParentAnswerResponse,
  GetChildAnswerRequest,
} from "./type";
/**
 * 자식이 제출한 parentType의 값
 * @param requstData - 자식의 id값, 부모의 타입
 * @returns
 */
const getAnswer = async (requstData: GetChildAnswerRequest) => {
  const response = await fetcher.post("/user/parent/question", requstData);
  console.log(response);
  return response.data;
};

const submitAnswer = async (requestData: ParentAnswerRequest) => {
  const { data } = await fetcher.post<ParentAnswerResponse>(
    "/user/parent/answer",
    requestData,
  );
  return data.data;
};

export default {
  getAnswer,
  submitAnswer,
};
