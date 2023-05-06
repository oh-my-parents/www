import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";
type Props = HTMLAttributes<HTMLDivElement> & {
  current: number;
  length: number;
};

const CardIndex = ({ current, className, length, ...props }: Props) => {
  let newCurrent = "";
  if (current < 10) {
    newCurrent = "0" + String(current);
  } else {
    newCurrent = String(current);
  }
  return (
    <div className={cn($.cardIndex, className)} {...props}>
      <span className={cn($.current)}>{newCurrent}</span>
      <span className={cn($.length)}>{length}</span>
    </div>
  );
};

export default CardIndex;
