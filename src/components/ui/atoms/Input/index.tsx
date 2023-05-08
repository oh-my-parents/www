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

function Input({
  value,
  onChange,
  size,
  variant,
  disabled,
  type,
  className,
  ...props
}: Props) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={cn(className, $.input, $[variant], $[size], {
        [$.disabled]: disabled,
      })}
      {...props}
    />
  );
}

export default Input;
