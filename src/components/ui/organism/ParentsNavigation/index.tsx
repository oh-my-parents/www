import arrowLeft from "/images/arrowLeft.svg";
import IconButton from "../../molecules/IconButton";
import Logo from "../../molecules/Logo";
import $ from "./index.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

type Props = {
  hasBackButton?: boolean;
  moveable?: boolean;
};

const index = ({ hasBackButton, moveable = false }: Props) => {
  const navigate = useNavigate();

  const onClickLeft = () => {
    navigate(-1);
  };

  return (
    <div className={cn($.navigation)}>
      {hasBackButton ? (
        <IconButton
          src={arrowLeft}
          onClick={onClickLeft}
          iconSize="small"
          iconVariant="navigation"
          buttonVariant="navigation"
          buttonSize="small"
        />
      ) : null}
      <div className={cn($.logoContainer, { [$.unmoveble]: !moveable })}>
        <Logo size="medium" variant="gradient" />
      </div>
    </div>
  );
};

export default index;
