import cn from "classnames";
import $ from "./index.module.scss";
import ParentsNavigation from "@/components/ui/organism/ParentsNavigation";
import ParentsAnswerCard from "@/components/ui/organism/ParentsAnswerCard";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { ParentsSelectAnswer, ParentsReciveAnswer } from "@/utils/recoil/atom";
import Button from "@/components/ui/atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import usePostParentsAnswer from "@/hooks/usePostParentsAnswer";

const index = () => {
  const setParentSelectAnswer = useSetRecoilState(ParentsSelectAnswer);
  const saveAnswer = usePostParentsAnswer();
  const childAnswers = useRecoilValue(ParentsReciveAnswer);

  const navigate = useNavigate();
  const onCheckAnswer = (questionNumber: number, result: boolean) => {
    setParentSelectAnswer((prev) => ({ ...prev, [questionNumber]: result }));
  };

  const onClickNextButton = async () => {
    await saveAnswer();
    navigate("/parents/prepare");
  };
  return (
    <div className={cn($.container)}>
      <ParentsNavigation hasBackButton />
      {childAnswers &&
        childAnswers.map((answer, i) => {
          return (
            <ParentsAnswerCard
              answer={answer}
              whole={10}
              onClick={onCheckAnswer}
              key={i}
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
