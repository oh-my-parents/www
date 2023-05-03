import React from "react";
import cn from "classnames";
import $ from "./button.module.scss";
import IsLoadingComponent from "./IsLoading.tsx";

type Props = {
  children?: JSX.Element | JSX.Element[] | string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: string;
  variant: string;
  isLoading?: Boolean;
  value?: string;
};

function Button({ children, onClick, size, variant, isLoading, value }: Props) {
  return (
    <button
      type="button"
      value={value}
      className={cn($.button, $[variant], $[size], {
        [$.isLoading]: isLoading,
      })}
      onClick={onClick}
    >
      {!isLoading ? children : <IsLoadingComponent />}
    </button>
  );
}

export default Button;
