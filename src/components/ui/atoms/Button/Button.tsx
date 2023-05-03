import React from "react";
import cn from "classnames";
import $ from "./button.module.scss";
import IsLoadingComponent from "./IsLoading.tsx";
import kakaoTalk from "/public/images/kakaotalk.svg";

type Props = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: string;
  variant: "kakao" | "answer" | "before" | "next";
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
