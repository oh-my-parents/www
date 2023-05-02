import React from "react";
import cn from "classnames";
import $ from "./input.module.scss";

type Props = React.HTMLAttributes<HTMLInputElement> & {
  size?: "small" | "medium" | "large";
  variant: "default";
  disabled?: boolean;
  value?: string;
};

function Input({ value, size, variant, disabled, ...props }: Props) {
  return (
    <input
      value={value}
      className={cn($.input, $[variant], $[size], { [$.disabled]: disabled })}
      {...props}
    />
  );
}

export default Input;
