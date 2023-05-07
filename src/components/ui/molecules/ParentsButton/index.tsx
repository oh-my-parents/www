import $ from "./index.module.scss";
import Button from "../../atoms/Button/Button";
import cn from "classnames";

export default function ParentsButton({
  onClickAgainButton,
  onClickStoreButton,
}: any) {
  return (
    <div className={cn($.parentsButton)}>
      <Button size="medium" variant="again" onClick={onClickAgainButton}>
        다시 채점하기
      </Button>
      <Button size="medium" variant="store" onClick={onClickStoreButton}>
        결과 저장하기
      </Button>
    </div>
  );
}
