import $ from "./index.module.scss";
import cn from "classnames";
import Card from "@/components/ui/molecules/Card";
import DropDown from "../../molecules/DropDown";
import Button from "../../atoms/Button/Button";
import { useEffect, useState } from "react";
import useProblemNavigate from "@/hooks/useProblemNavigate";
import { Answer } from "@/utils/recoil/atom";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";

export default function DropdownAnswer() {
  const age = [...new Array(100).fill(0)].map(
    (item, index) => item + index + 1,
  );
  const { id } = useParams();
  const [answer, setAnswer] = useRecoilState(Answer);
  const [click, setClick] = useState(20);
  const [state, setState] = useState(false);
  const navigate = useProblemNavigate();

  useEffect(() => {
    if (answer.length >= Number(id)) {
      setClick(Number(answer[Number(id) - 1]));
    }
  }, []);

  const onClickNextButton = () => {
    if (answer.length >= Number(id)) {
      const before = answer.slice(0, Number(id) - 1);
      const after = answer.slice(Number(id));
      setAnswer([...before, String(click), ...after]);
    } else {
      setAnswer([...answer, String(click)]);
    }
    navigate(+1);
  };

  return (
    <>
      <Card.Container className={cn($.answerCard)}>
        <Card.Shilling>😳</Card.Shilling>
        <Card.Body className={cn($.body)}>
          <DropDown
            array={age}
            click={click}
            state={state}
            setClick={setClick}
            setState={setState}
          />
        </Card.Body>
      </Card.Container>
      <Button size="large" variant="next" onClick={onClickNextButton}>
        다음 문제
      </Button>
    </>
  );
}
