import userService from "@/service/user.service";
import { UserName } from "@/utils/recoil/atom";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

const useGetNickname = () => {
  const [nickname, setUserName] = useRecoilState(UserName);

  useEffect(() => {
    (async () => {
      const username = await userService.getUserName();
      setUserName(username);
    })();
  }, []);

  return nickname;
};

export default useGetNickname;
