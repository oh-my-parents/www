import $ from "./index.module.scss";
import IconButton from "../../molecules/IconButton";
import arrowLeft from "/images/arrowLeft.svg";
import arrowRight from "/images/arrowRight.svg";
import Logo from "../../molecules/Logo";

export default function ProblemNavigation({ onClickLogo, onClickLeft }: any) {
  return (
    <div className={$.problemNavigation}>
      <IconButton
        src={arrowLeft}
        onClick={onClickLeft}
        iconSize="small"
        iconVariant="default"
        buttonVariant="arrow"
        buttonSize="small"
      />

      <Logo onClick={onClickLogo} size="medium" variant="gradient">
        Oh my parents
      </Logo>
      <IconButton
        src={arrowRight}
        onClick={onClickLeft}
        iconSize="small"
        iconVariant="default"
        buttonVariant="arrow"
        buttonSize="small"
      />
    </div>
  );
}
