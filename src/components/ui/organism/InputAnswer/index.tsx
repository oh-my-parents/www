import $ from "./index.module.scss";
import cn from "classnames";
import Card from "@/components/ui/molecules/Card";
import Input from "../../atoms/Input";
import useProblemNavigate from "@/hooks/useProblemNavigate";
import Button from "../../atoms/Button/Button";
import { useState } from "react";

export default function InputAnswer() {
  const [_keyword, setKeyword] = useState("");
  const navigate = useProblemNavigate();

  const onClickNextButton = () => {
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
          />
        </Card.Body>
      </Card.Container>
      <Button size="large" variant="next" onClick={onClickNextButton}>
        다음 문제
      </Button>
    </>
  );
}
