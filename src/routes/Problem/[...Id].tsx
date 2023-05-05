// import { Question } from "@/utils/recoil/atom";
// import { useNavigate, useParams } from "react-router-dom";
// import { useRecoilValue } from "recoil";
// import SelectAnswer from "@/components/ui/organism/SelectAnswer";
import DropdownAnswer from "@/components/ui/organism/DropdownAnswer";
import Questions from "@/components/ui/organism/Question";
import $ from "./index.module.scss";
// const sample = ["오늘", "지난주", "지난달", "언제더라..."];

const ProblemDetailPages = () => {
  // const { id } = useParams();
  // const navigate = useNavigate();
  // const questions = useRecoilValue(Question);
  // const currnetQuestion = questions[Number(id) - 1];

  // const onClickAnswer = () => {
  //   navigate(`/problem/${Number(id) + 1}`);
  // };

  return (
    <div className={$.questionLayout}>
      <Questions />
      <DropdownAnswer />
      {/* <SelectAnswer onClick={onClickAnswer} array={sample} /> */}
    </div>
  );
};

export default ProblemDetailPages;
