import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import SelectAnswer from "@/components/ui/organism/SelectAnswer";
import DropdownAnswer from "@/components/ui/organism/DropdownAnswer";
import Questions from "@/components/ui/organism/Question";
import InputAnswer from "@/components/ui/organism/InputAnswer";
import TextAreaAnswer from "@/components/ui/organism/TextAreaAnswer";
import $ from "./index.module.scss";
import { Question } from "@/utils/recoil/atom";
import { useState, useEffect } from "react";
import useProblemNavigate from "@/hooks/useProblemNavigate";
import { Answer } from "@/utils/recoil/atom";
import { useRecoilState } from "recoil";

const sample = ["오늘", "지난주", "지난달", "언제더라..."];

const ProblemDetailPages = () => {
  const { id } = useParams();
  const navigate = useProblemNavigate();
  const questions = useRecoilValue(Question);
  const [click, setClick] = useState(1);
  const data = questions[Number(id) - 1];
  const [answer, setAnswer] = useRecoilState(Answer);

  useEffect(() => {
    if (answer.length >= Number(id)) {
      const after = answer.slice(1);
      setAnswer([sample[click], ...after]);
    } else {
      setAnswer([sample[click]]);
    }
  }, [click]);

  const onClickAnswer = (index: any) => {
    setClick(index);
    navigate(+1);
  };

  const AnswerRouter = () => {
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
    <>
      <div className={$.questionLayout}>
        <Questions data={data} />
        <AnswerRouter />
      </div>
    </>
  );
};

export default ProblemDetailPages;
