import cn from "classnames";
import $ from "./index.module.scss";
import ParentsNavigation from "@/components/ui/organism/ParentsNavigation";
import ParentsAnswerCard from "@/components/ui/organism/ParentsAnswerCard";
import { useSetRecoilState } from "recoil";
import { ParentsSelectAnswer } from "@/utils/recoil/atom";

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

  const onCheckAnswer = (questionNumber: number, result: boolean) => {
    setParentSelectAnswer((prev) => ({ ...prev, [questionNumber]: result }));
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
    </div>
  );
};

export default index;
