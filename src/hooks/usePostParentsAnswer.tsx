import { useRecoilValue } from "recoil";
import {
  ParentsSelectAnswer,
  Parents,
  AtomParentsSelectAnswerType,
} from "@/utils/recoil/atom";
import parentsService from "@/service/parents.service";

type PARENTS = "MOTHER" | "FATHER";

const usePostParentsAnswer = () => {
  const parentsAnswer = useRecoilValue(ParentsSelectAnswer);
  const parentType = useRecoilValue(Parents);

  const createDto = (
    parentType: PARENTS,
    parentsAnswer: AtomParentsSelectAnswerType,
  ) => {
    const data = Object.entries(parentsAnswer).map(([number, value]) => {
      return {
        number: Number(number),
        score: value ? 10 : 0,
      };
    });

    return {
      parentType,
      userParentAnswer: data,
    };
  };

  const postParentsAnswer = async () => {
    const data = await parentsService.submitAnswer(
      createDto(parentType as PARENTS, parentsAnswer),
    );
    return data;
  };

  return postParentsAnswer;
};

export default usePostParentsAnswer;
