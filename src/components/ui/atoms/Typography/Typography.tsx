import React from "react";
import cn from "classnames";
import $ from "./typography.module.scss";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  variant: "question";
  size: "small" | "medium" | "large";
};

function Typography({ children, variant, size }: Props) {
  return <p className={cn($.p, $[variant], $[size])}>{children}</p>;
}

export default Typography;
