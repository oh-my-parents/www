import { useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import SelectAnswer from "@/components/ui/organism/SelectAnswer";
import DropdownAnswer from "@/components/ui/organism/DropdownAnswer";
import Questions from "@/components/ui/organism/Question";
import InputAnswer from "@/components/ui/organism/InputAnswer";
import TextAreaAnswer from "@/components/ui/organism/TextAreaAnswer";
import $ from "./index.module.scss";
import { Question } from "@/utils/recoil/atom";
import { MouseEvent } from "react";
import useProblemNavigate from "@/hooks/useProblemNavigate";
import { Answer } from "@/utils/recoil/atom";

const ProblemDetailPages = () => {
  const { id } = useParams();
  const navigate = useProblemNavigate();
  const questions = useRecoilValue(Question);
  const data = questions[Number(id) - 1];
  const setAnswer = useSetRecoilState(Answer);
  const shillingIcons: { [key: number]: string } = {
    1: "🧐",
    2: "🧐",
    4: "😎",
    3: "🧐",
    5: "🧐",
    6: "🧐",
    7: "🧐",
    8: "🧐",
    9: "🧐",
    10: "🧐",
  };
  const onClickAnswer = (e: MouseEvent<HTMLButtonElement>) => {
    const content = e.currentTarget.textContent!;

    setAnswer((prev) => {
      if (prev.length)
        return prev.map((item, idx) =>
          idx === Number(id) - 1 ? content : item,
        );
      return [content];
    });
    navigate(+1);
  };

  const AnswerRouter = () => {
    switch (data.questionType) {
      case "WORD":
        return <InputAnswer shillingIcon={shillingIcons[Number(id)]} />;
      case "DROPDOWN":
        return <DropdownAnswer shillingIcon={shillingIcons[Number(id)]} />;
      case "SELECT":
        return <SelectAnswer onClick={onClickAnswer} choices={data.choices} />;
      case "SENTENCE":
        return <TextAreaAnswer shillingIcon={shillingIcons[Number(id)]} />;
      default:
        return <InputAnswer shillingIcon={shillingIcons[Number(id)]} />;
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
