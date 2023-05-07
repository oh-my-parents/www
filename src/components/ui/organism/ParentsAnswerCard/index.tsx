import { useState } from "react";
import Card from "../../molecules/Card";
import { ChildAnswer } from "@/apis/user/parent/type";
import ParentsCard from "../ParentsCard";
import { PARENTS } from "@/constants/text.json";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = {
  answer: ChildAnswer;
  whole: number;
  onClick: (questionid: number, result: boolean) => void;
};

const index = ({ answer, whole, onClick }: Props) => {
  const [unchecked, setUnchecked] = useState({
    right: false,
    wrong: false,
  });

  const { ICONS, HELPER_TEXT } =
    PARENTS.REPORT[answer.parentType][answer.questionNumber - 1];
  return (
    <ParentsCard.Container className={cn($.container)}>
      <ParentsCard.Header className={cn($.header)} type="default">
        <Card.CardIndex
          className={cn($.cardIndex)}
          current={answer.questionNumber}
          length={whole}
        />
        <ParentsCard.Text className={cn($.icons)}>{ICONS}</ParentsCard.Text>
      </ParentsCard.Header>
      <ParentsCard.Body className={cn($.body)}>
        <Card.HelperText className={cn($.helperText)}>
          {HELPER_TEXT.ABOVE}
        </Card.HelperText>
        <ParentsCard.Answer className={cn($.answer)}>
          {answer.childAnswer}
        </ParentsCard.Answer>
        {HELPER_TEXT.UNDER ? (
          <Card.HelperText className={cn($.helperText)}>
            {HELPER_TEXT.UNDER}
          </Card.HelperText>
        ) : null}
      </ParentsCard.Body>
      <ParentsCard.ButtonGroup className={cn($.buttonGroup)}>
        <ParentsCard.Button
          unchecked={unchecked.wrong}
          onClick={() => {
            onClick(answer.questionNumber, false);
            setUnchecked({
              wrong: false,
              right: true,
            });
          }}
        >
          {PARENTS.ANSWER.WRONG}
        </ParentsCard.Button>
        <ParentsCard.Button
          unchecked={unchecked.right}
          onClick={() => {
            onClick(answer.questionNumber, true);
            setUnchecked({
              wrong: true,
              right: false,
            });
          }}
          isPositive
        >
          {PARENTS.ANSWER.RIGHT}
        </ParentsCard.Button>
      </ParentsCard.ButtonGroup>
    </ParentsCard.Container>
  );
};

export default index;
