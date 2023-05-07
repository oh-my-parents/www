import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLDivElement> & {};

const Container = ({ children, className, onClick, ...props }: Props) => {
  return (
    <article
      onClick={onClick}
      className={cn($.container, className)}
      {...props}
    >
      {children}
    </article>
  );
};

export default Container;
