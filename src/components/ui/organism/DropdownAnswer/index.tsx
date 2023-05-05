import $ from "./index.module.scss";
import cn from "classnames";
import Card from "@/components/ui/molecules/Card";
import DropDown from "../../molecules/DropDown";
import Button from "../../atoms/Button/Button";
import { useState } from "react";

export default function DropdownAnswer() {
  const age = [...new Array(100).fill(20)].map(
    (item, index) => item + index + 1,
  );
  const [click, setClick] = useState(20);
  const [state, setState] = useState(false);

  const onClickNextButton = () => {
    console.log(click);
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
