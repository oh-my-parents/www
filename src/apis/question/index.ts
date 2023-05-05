import fetcher from "../fecther";
import { QuestionsData } from "./type";

const question = async (parentType: string) => {
  try {
    const { data } = await fetcher.get<ResponseContainer<QuestionsData>>(
      `/question?parentType=${parentType}`,
    );
    console.log("api", data);
    if (data.code !== 200) throw new Error(data.message);
    return data.data.questionDTOs;
  } catch (e) {
    throw Error("Unknown Error");
  }
};

export default {
  question,
};
