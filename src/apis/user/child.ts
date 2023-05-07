import fetcher from "../fecther";
import { UserAnswerRequest } from "./type";

const submitAnswer = async (requestData: UserAnswerRequest) => {
  try {
    const { data } = await fetcher.post<ResponseContainer<string>>(
      "/user/child/answer",
      requestData,
    );
    if (data.code !== 200) throw new Error(data.message);

    return data.data;
  } catch (e) {
    throw Error("Unknown Error");
  }
};

export default { submitAnswer };
