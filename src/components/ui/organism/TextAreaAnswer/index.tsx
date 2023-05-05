import $ from "./index.module.scss";
import Card from "@/components/ui/molecules/Card";
import cn from "classnames";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button/Button";
import { useState } from "react";

export default function TextAreaAnswer() {
  const [keyword, setKeyword] = useState("");
  const onClickNextButton = () => {
    console.log(keyword);
  };

  const onChangeTextArea = (e: any) => {
    setKeyword(e.target.value);
  };
  return (
    <>
      <Card.Container className={cn($.answerCard)}>
        <Card.Shilling>😳</Card.Shilling>
        <Card.Body className={cn($.body)}>
          <TextArea
            size="medium"
            variant="default"
            className={cn($.textArea)}
            onChange={onChangeTextArea}
          />
        </Card.Body>
      </Card.Container>
      <Button size="large" variant="next" onClick={onClickNextButton}>
        다음 문제
      </Button>
    </>
  );
}
