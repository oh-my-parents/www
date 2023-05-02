import fetcher from "../../fecther";

const score = async () => {
  const requestData = {
    id: "nakhyeon",
    parentType: "FATHER",
  };
  const { data } = await fetcher.post(`user/score`, requestData);

  return data;
};

export default {
  score,
};
