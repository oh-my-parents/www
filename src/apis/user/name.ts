import fetcher from "@/apis/fecther";

const getUserName = async () => {
  const { data } = await fetcher.get<ResponseContainer<string>>("/user/name");
  if (data.code !== 200) throw new Error(data.message);

  return data.data;
};

const setUserName = async (name: string) => {
  const { data } = await fetcher.patch<ResponseContainer<string>>(
    "/user/name",
    { name },
  );

  if (data.code !== 200) throw new Error(data.message);

  return data.data;
};

export default {
  getUserName,
  setUserName,
};
