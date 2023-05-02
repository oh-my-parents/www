import questionService from "@/service/question.service";
import { useRecoilState } from "recoil";
import { Question } from "@/utils/recoil/atom";

const useGetQuestions = () => {
  const [questions, setQuestions] = useRecoilState(Question);

  const getQuestions = async (parentType: parentType) => {
    const question = await questionService.getQuestions(parentType);
    setQuestions(question);
  };

  return {
    questions,
    getQuestions,
  };
};

export default useGetQuestions;
