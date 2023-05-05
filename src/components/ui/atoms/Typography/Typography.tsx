import React from "react";
import cn from "classnames";
import $ from "./typography.module.scss";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  size: "small" | "medium" | "large";
  variant:
    | "kakao"
    | "main"
    | "logo"
    | "default"
    | "mainLogo"
    | "parents"
    | "share";
};

function Typography({ children, variant, size, className, ...props }: Props) {
  return (
    <p className={cn($.p, $[variant], $[size], className)} {...props}>
      {children}
    </p>
  );
}

export default Typography;
