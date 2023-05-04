import { Question } from "@/utils/recoil/atom";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

const ProblemDetailPages = () => {
  const { id } = useParams();
  const questions = useRecoilValue(Question);
  const currnetQuestion = questions[Number(id) - 1];
  return (
    <div>
      <p>문제 상세페이지</p>
      <h2>{currnetQuestion}</h2>
    </div>
  );
};

export default ProblemDetailPages;
