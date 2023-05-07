import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLDivElement>;

const ButtonGroup = ({ children, className, ...props }: Props) => {
  return (
    <div className={cn($.buttonGroup, className)} {...props}>
      {children}
    </div>
  );
};

export default ButtonGroup;
