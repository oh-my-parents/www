import userService from "@/service/user.service";
import { useRecoilState } from "recoil";
import { ResultUserScore } from "@/utils/recoil/atom";
import { parentType } from "@/apis/question/type";

const useUserScore = () => {
  const [state, setReulstUserScore] = useRecoilState(ResultUserScore);

  const setState = async (parentType: parentType) => {
    const score = await userService.getScore(parentType);
    setReulstUserScore(score);
  };

  return [state, setState] as const;
};

export default useUserScore;
