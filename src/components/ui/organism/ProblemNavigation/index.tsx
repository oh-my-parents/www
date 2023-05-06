import $ from "./index.module.scss";
import IconButton from "../../molecules/IconButton";
import arrowLeft from "/images/arrowLeft.svg";
import arrowRight from "/images/arrowRight.svg";
import Logo from "../../molecules/Logo";
import cn from "classnames";

export default function ProblemNavigation({ onClickLeft, className }: any) {
  return (
    <div className={cn($.problemNavigation, className)}>
      <IconButton
        src={arrowLeft}
        onClick={onClickLeft}
        iconSize="small"
        iconVariant="navigation"
        buttonVariant="navigation"
        buttonSize="small"
      />

      <Logo size="medium" variant="gradient">
        Oh my parents
      </Logo>
      <IconButton
        src={arrowRight}
        onClick={onClickLeft}
        iconSize="small"
        iconVariant="navigation"
        buttonVariant="navigation"
        buttonSize="small"
      />
    </div>
  );
}
