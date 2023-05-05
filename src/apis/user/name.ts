import fetcher from "@/apis/fecther";

const getUserName = async () => {
  const response = await fetcher.get<ResponseContainer<string>>("/user/name");
  return response.data;
};

const setUserName = async (name: string) => {
  const response = await fetcher.patch<ResponseContainer<string>>(
    "/user/name",
    { name },
  );
  return response.data;
};

export default {
  getUserName,
  setUserName,
};
