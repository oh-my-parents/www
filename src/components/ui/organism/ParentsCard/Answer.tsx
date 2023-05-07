import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLDivElement>;

const Answer = ({ className, children, ...props }: Props) => {
  return (
    <div className={cn($.answerPlace, className)} {...props}>
      {children}
    </div>
  );
};

export default Answer;
