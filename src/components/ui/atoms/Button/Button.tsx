import React from 'react';
import cn from 'classnames';
import $ from './button.module.scss';
import IsLoadingComponent from './IsLoading.tsx';

type Props = {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  props?: Array<string>;
  size?: string;
  variant?: 'kakao' | 'answer' | 'before' | 'next';
  isLoading?: Boolean;
};

function Button({ text, onClick, size, variant, isLoading, ...props }: Props) {
  return (
    <button
      type="button"
      className={cn($.button, $[variant], $[size], {
        [$.isLoading]: isLoading,
      })}
      onClick={onClick}
      {...props}
    >
      {!isLoading ? text : <IsLoadingComponent />}
    </button>
  );
}

export default Button;
