import React from "react";
import cn from "classnames";
import $ from "./button.module.scss";
import IsLoadingComponent from "./IsLoading.tsx";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  size: "small" | "medium" | "large";
  variant:
    | "kakao"
    | "music"
    | "arrow"
    | "answer"
    | "next"
    | "user"
    | "default"
    | "navigation";
  isLoading?: Boolean;
  value?: string;
};

function Button({
  children,
  onClick,
  size,
  variant,
  isLoading,
  value,
  className,
}: Props) {
  return (
    <button
      type="button"
      value={value}
      className={cn(
        $.button,
        $[variant],
        $[size],
        {
          [$.isLoading]: isLoading,
        },
        className,
      )}
      onClick={onClick}
    >
      {!isLoading ? children : <IsLoadingComponent />}
    </button>
  );
}

export default Button;
