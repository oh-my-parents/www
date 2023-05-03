import fetcher from "../fecther";

type Question = [];

const question = async (parentType: string) => {
  try {
    const { data } = await fetcher.get<ResponseContainer<Question>>(
      `/question?parentType=${parentType}`,
    );
    console.log("api", data);
    if (data.code !== 200) throw new Error(data.message);
    return data.data;
  } catch (e) {
    throw Error("Unknown Error");
  }
};

export default {
  question,
};
