import { useEffect } from "react";
import parentsService from "@/service/parents.service";
import { useRecoilState } from "recoil";
import {
  ParentsReciveAnswer,
  IsAnswered,
  ChildName,
} from "@/utils/recoil/atom";

const useGetChildrenReponse = (id: string, parentType: "FATHER" | "MOTHER") => {
  const [childAnswers, setParentReciveAnswer] =
    useRecoilState(ParentsReciveAnswer);
  const [childName, setChildName] = useRecoilState(ChildName);
  const [answered, setAnswered] = useRecoilState(IsAnswered);

  useEffect(() => {
    if (id && parentType) {
      (async () => {
        const { answered, answers, name } = await parentsService.getAnswer({
          id,
          parentType,
        });
        setAnswered(answered);
        setParentReciveAnswer(answers);
        setChildName(name);
      })();
    }
  }, [id, parentType]);

  return { childAnswers, childName, answered };
};

export default useGetChildrenReponse;
