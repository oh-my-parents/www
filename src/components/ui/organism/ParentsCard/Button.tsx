import React from "react";
import ButtonUI from "@/components/ui/atoms/Button/Button";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isPositive?: boolean;
  value?: string;
};

const Button = ({ children, isPositive, ...props }: Props) => {
  return (
    <ButtonUI
      size="small"
      variant="default"
      className={cn({
        [$.positive]: isPositive,
        [$.negative]: !isPositive,
      })}
      {...props}
    >
      {children}
    </ButtonUI>
  );
};

export default Button;
