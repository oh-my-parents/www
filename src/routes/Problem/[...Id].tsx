import { Question } from "@/utils/recoil/atom";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import SelectAnswer from "@/components/ui/organism/SelectAnswer";
import DropdownAnswer from "@/components/ui/organism/DropdownAnswer";
import Questions from "@/components/ui/organism/Question";
import InputAnswer from "@/components/ui/organism/InputAnswer";
import TextAreaAnswer from "@/components/ui/organism/TextAreaAnswer";
import $ from "./index.module.scss";

const sample = ["오늘", "지난주", "지난달", "언제더라..."];

const ProblemDetailPages = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const questions = useRecoilValue(Question);

  const data = questions[Number(id) - 1];

  const onClickAnswer = () => {
    navigate(`/problem/${Number(id) + 1}`);
  };

  const Answer = () => {
    switch (data.questionType) {
      case "WORD":
        return <InputAnswer />;
      case "DROPDOWN":
        return <DropdownAnswer />;
      case "SELECT":
        return <SelectAnswer onClick={onClickAnswer} array={sample} />;
      case "SENTENCE":
        return <TextAreaAnswer />;
      default:
        return <InputAnswer />;
    }
  };

  return (
    <div className={$.questionLayout}>
      <Questions data={data} />
      <Answer />
    </div>
  );
};

export default ProblemDetailPages;
