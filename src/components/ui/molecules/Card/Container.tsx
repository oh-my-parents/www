import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";
type Props = HTMLAttributes<HTMLDivElement> & {};

const Container = ({ children, className, ...props }: Props) => {
  return (
    <article className={cn($.container, className)} {...props}>
      {children}
    </article>
  );
};

export default Container;
