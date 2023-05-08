import $ from "./index.module.scss";
import Card from "@/components/ui/molecules/Card";
import cn from "classnames";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useProblemNavigate from "@/hooks/useProblemNavigate";
import { Answer, Parents } from "@/utils/recoil/atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { useParams } from "react-router-dom";
import userService from "@/service/user.service";
import { parentType } from "@/apis/question/type";

export default function TextAreaAnswer({
  shillingIcon,
}: {
  shillingIcon: string;
}) {
  const { id } = useParams();
  const naviagtion = useNavigate();
  const navigate = useProblemNavigate();
  const [answer, setAnswer] = useRecoilState(Answer);
  const [keyword, setKeyword] = useState(answer[Number(id) - 1]);
  const parentsType = useRecoilValue(Parents);

  const onClickNextButton = () => {
    if (answer.length >= Number(id)) {
      const before = answer.slice(0, Number(id) - 1);
      const after = answer.slice(Number(id));
      setAnswer([...before, keyword, ...after]);
    } else {
      setAnswer([...answer, keyword]);
    }
    if (Number(id) === 10) {
      userService.submitAnswer(parentsType as parentType, answer);
      naviagtion("/share");
      return;
    }
    navigate(+1);
  };

  const onChangeTextArea = (e: any) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <Card.Container className={cn($.answerCard)}>
        <Card.Shilling>{shillingIcon}</Card.Shilling>
        <Card.Body className={cn($.body)}>
          <TextArea
            value={keyword}
            size="medium"
            variant="default"
            className={cn($.textArea)}
            onChange={onChangeTextArea}
          />
        </Card.Body>
      </Card.Container>
      <Button
        size="large"
        variant="next"
        onClick={onClickNextButton}
        disabled={!keyword || keyword.length < 1}
      >
        {id === "10" ? "제출하기" : "다음문제"}
      </Button>
    </>
  );
}
