import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLParagraphElement>;

const Body = ({ children, className, ...props }: Props) => {
  return (
    <main className={cn($.body, className)} {...props}>
      {children}
    </main>
  );
};

export default Body;
