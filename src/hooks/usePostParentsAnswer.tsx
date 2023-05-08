import { useRecoilValue } from "recoil";
import {
  ParentsSelectAnswer,
  Parents,
  AtomParentsSelectAnswerType,
  ChildrenId,
} from "@/utils/recoil/atom";
import parentsService from "@/service/parents.service";

type PARENTS = "MOTHER" | "FATHER";

const usePostParentsAnswer = () => {
  const parentsAnswer = useRecoilValue(ParentsSelectAnswer);
  const parentType = useRecoilValue(Parents);
  const childrenId = useRecoilValue(ChildrenId);

  const createDto = (
    id: string,
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
      id,
      parentType,
      userParentAnswers: data,
    };
  };

  const postParentsAnswer = async () => {
    const data = await parentsService.submitAnswer(
      createDto(childrenId, parentType as PARENTS, parentsAnswer),
    );
    return data;
  };

  return postParentsAnswer;
};

export default usePostParentsAnswer;
