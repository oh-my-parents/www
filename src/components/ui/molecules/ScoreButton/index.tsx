import Button from "../../atoms/Button/Button";
import KakaoButton from "../KakaoButton";
import $ from "./index.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

export default function ScoreButton() {
  const navigate = useNavigate();
  const onClickAgain = () => {
    navigate(-1);
  };

  return (
    <div className={cn($.layout)}>
      <Button
        size="medium"
        variant="user"
        className={cn($.user)}
        onClick={onClickAgain}
      >
        처음으로 돌아가기
      </Button>
      <KakaoButton onClick={() => ""} className={cn($.kakao)}>
        카카오톡으로 테스트 공유하기
      </KakaoButton>
    </div>
  );
}
