import { Question } from "@/utils/recoil/atom";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import SelectAnswer from "@/components/ui/organism/SelectAnswer";
import DropDown from "@/components/ui/molecules/DropDown";
const sample = ["오늘", "지난주", "지난달", "언제더라..."];

const ProblemDetailPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questions = useRecoilValue(Question);
  const currnetQuestion = questions[Number(id) - 1];
  const onClickAnswer = () => {
    navigate(`/problem/${Number(id) + 1}`);
  };

  return (
    <div>
      <DropDown />
      <SelectAnswer onClick={onClickAnswer} array={sample} />
      <h2>{currnetQuestion}</h2>
    </div>
  );
};

export default ProblemDetailPages;
