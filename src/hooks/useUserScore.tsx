import userService from "@/service/user.service";
import { useRecoilState } from "recoil";
import { ResultUserScore } from "@/utils/recoil/atom";
import { parentType } from "@/apis/question/type";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const useUserScore = () => {
  const [state, setReulstUserScore] = useRecoilState(ResultUserScore);
  const navi = useNavigate();
  const setState = async (parentType: parentType) => {
    try {
      const score = await userService.getScore(parentType);
      setReulstUserScore(score);
    } catch (e) {
      if (e instanceof AxiosError) {
        navi("/error/network");
      } else if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  return [state, setState] as const;
};

export default useUserScore;
