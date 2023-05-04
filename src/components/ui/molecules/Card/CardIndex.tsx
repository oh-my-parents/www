import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";
type Props = HTMLAttributes<HTMLDivElement> & {
  current: number;
  length: number;
};

const CardIndex = ({ current, className, length, ...props }: Props) => {
  return (
    <div className={cn($.cardIndex, className)} {...props}>
      <span className={cn($.current)}>{current}</span>
      <span className={cn($.length)}>{length}</span>
    </div>
  );
};

export default CardIndex;
