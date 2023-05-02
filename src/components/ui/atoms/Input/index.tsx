import React, { HTMLInputTypeAttribute } from "react";
import cn from "classnames";
import $ from "./input.module.scss";

type Props = React.HTMLAttributes<HTMLInputElement> & {
  size: "small" | "medium" | "large";
  variant: "default";
  disabled?: boolean;
  value?: string;
  type?: HTMLInputTypeAttribute | undefined;
};

function Input({ value, size, variant, disabled, type, ...props }: Props) {
  return (
    <input
      type={type}
      value={value}
      className={cn($.input, $[variant], $[size], { [$.disabled]: disabled })}
      {...props}
    />
  );
}

export default Input;
