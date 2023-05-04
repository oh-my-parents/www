import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLDivElement> & {};

const Shilling = ({ children, className, ...props }: Props) => {
  return (
    <div className={cn($.shillig, className)} {...props}>
      {children}
    </div>
  );
};

export default Shilling;
