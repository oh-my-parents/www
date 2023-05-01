import fetcher from "../fecther";

const question = async (parentType: string) => {
  const { data } = await fetcher.get(`/question?parentType=${parentType}`);

  return data;
};

export default {
  question,
};
