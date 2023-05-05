import $ from "./index.module.scss";
import Button from "../../atoms/Button/Button";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

export default function UserButton() {
  const navigate = useNavigate();
  const onClickStartButton = () => {
    navigate("/problem");
  };

  const onClickCheckScore = () => {};

  return (
    <div className={cn($.userButton)}>
      <Button size="medium" variant="user" onClick={onClickStartButton}>
        테스트 시작하기
      </Button>
      <Button size="medium" variant="user" onClick={onClickCheckScore}>
        내점수 확인하기
      </Button>
    </div>
  );
}
