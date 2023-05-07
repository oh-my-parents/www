import React from "react";
import ButtonUI from "@/components/ui/atoms/Button/Button";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isPositive?: boolean;
  value?: string;
  unchecked?: boolean;
};

const Button = ({
  onClick,
  children,
  isPositive,
  unchecked = false,
  ...props
}: Props) => {
  return (
    <ButtonUI
      onClick={onClick}
      size="small"
      variant="default"
      className={cn({
        [$.positive]: isPositive,
        [$.negative]: !isPositive,
        [$.unchecked]: unchecked,
      })}
      {...props}
    >
      {children}
    </ButtonUI>
  );
};

export default Button;
