import cn from "classnames";
import $ from "./index.module.scss";
import ParentsNavigation from "@/components/ui/organism/ParentsNavigation";
import ParentsAnswerCard from "@/components/ui/organism/ParentsAnswerCard";
import { useSetRecoilState } from "recoil";
import { ParentsSelectAnswer } from "@/utils/recoil/atom";
import Button from "@/components/ui/atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const index = () => {
  const setParentSelectAnswer = useSetRecoilState(ParentsSelectAnswer);
  const sample = (i: number) => {
    return {
      questionNumber: i + 1,
      question: "sdf",
      parentType: "MOTHER" as "MOTHER" | "FATHER",
      childAnswer: "무야무야",
    };
  };
  const navigate = useNavigate();
  const onCheckAnswer = (questionNumber: number, result: boolean) => {
    setParentSelectAnswer((prev) => ({ ...prev, [questionNumber]: result }));
  };

  const onClickNextButton = () => {
    navigate("/parents/prepare");
  };
  return (
    <div className={cn($.container)}>
      <ParentsNavigation hasBackButton />
      {Array(10)
        .fill(0)
        .map((_, i) => {
          return (
            <ParentsAnswerCard
              answer={sample(i)}
              whole={10}
              onClick={onCheckAnswer}
            />
          );
        })}
      <Button
        size="large"
        variant="user"
        className={cn($.button)}
        onClick={onClickNextButton}
      >
        우리 아이 점수 저장하기
      </Button>
    </div>
  );
};

export default index;
