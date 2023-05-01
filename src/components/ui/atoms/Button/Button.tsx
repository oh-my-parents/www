import React from 'react';
import cn from 'classnames';
import $ from './button.module.scss';
import IsLoadingComponent from './IsLoading.tsx';

type Props = {
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  size: string;
  variant: 'kakao' | 'answer' | 'before' | 'next';
  isLoading?: Boolean;
};

function Button({ children, onClick, size, variant, isLoading }: Props) {
  return (
    <button
      type="button"
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
