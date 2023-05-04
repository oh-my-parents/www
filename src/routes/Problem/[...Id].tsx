import { Question } from "@/utils/recoil/atom";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import SelectAnswer from "@/components/ui/organism/SelectAnswer";

const sample = ["오늘", "지난주", "지난달", "언제더라..."];
const ProblemDetailPages = () => {
  const { id } = useParams();
  const questions = useRecoilValue(Question);
  const currnetQuestion = questions[Number(id) - 1];
  return (
    <div>
      <p>문제 상세페이지</p>
      <SelectAnswer array={sample} />
      <h2>{currnetQuestion}</h2>
    </div>
  );
};

export default ProblemDetailPages;
