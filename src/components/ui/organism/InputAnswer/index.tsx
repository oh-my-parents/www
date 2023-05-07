import $ from "./index.module.scss";
import cn from "classnames";
import Card from "@/components/ui/molecules/Card";
import Input from "../../atoms/Input";
import useProblemNavigate from "@/hooks/useProblemNavigate";
import Button from "../../atoms/Button/Button";
import { useState } from "react";
import { Answer } from "@/utils/recoil/atom";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

export default function InputAnswer() {
  const [answer, setAnswer] = useRecoilState(Answer);
  const { id } = useParams();
  const navigate = useProblemNavigate();
  const [keyword, setKeyword] = useState(answer[Number(id) - 1]);

  const onClickNextButton = () => {
    if (answer.length >= Number(id)) {
      const before = answer.slice(0, Number(id) - 1);
      const after = answer.slice(Number(id));
      setAnswer([...before, keyword, ...after]);
    } else {
      setAnswer([...answer, keyword]);
    }
    navigate(+1);
  };

  const onChangeInput = (e: any) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <Card.Container className={cn($.answerCard)}>
        <Card.Shilling>😳</Card.Shilling>
        <Card.Body className={cn($.body)}>
          <Input
            size="large"
            className={cn($.input)}
            variant="default"
            type="text"
            onChange={onChangeInput}
            value={keyword}
          />
        </Card.Body>
      </Card.Container>
      <Button
        size="large"
        variant="next"
        onClick={onClickNextButton}
        disabled={!keyword || keyword.length < 1}
      >
        다음문제
      </Button>
    </>
  );
}
