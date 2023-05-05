import fetcher from "@/apis/fecther";

const getUserName = async () => {
  const response = await fetcher.get("/user/name");
  return response.data;
};

const setUserName = async (name: string) => {
  const response = await fetcher.patch("/user/name", { name });
  return response.data;
};

export default {
  getUserName,
  setUserName,
};
