import $ from "./index.module.scss";
import Card from "@/components/ui/molecules/Card";
import cn from "classnames";
import TextArea from "../../atoms/TextArea";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useProblemNavigate from "@/hooks/useProblemNavigate";
import { Answer } from "@/utils/recoil/atom";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

export default function TextAreaAnswer() {
  const [keyword, setKeyword] = useState("");
  const navigate = useProblemNavigate();
  const naviagtion = useNavigate();
  const [answer, setAnswer] = useRecoilState(Answer);
  const { id } = useParams();

  useEffect(() => {
    if (answer.length >= Number(id)) {
      setKeyword(answer[Number(id) - 1]);
    }
  }, []);

  const onClickNextButton = () => {
    if (answer.length >= Number(id)) {
      const before = answer.slice(0, Number(id) - 1);
      const after = answer.slice(Number(id));
      setAnswer([...before, keyword, ...after]);
    } else {
      setAnswer([...answer, keyword]);
    }
    if (Number(id) === 10) {
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
        <Card.Shilling>😳</Card.Shilling>
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
      <Button size="large" variant="next" onClick={onClickNextButton}>
        다음 문제
      </Button>
    </>
  );
}
