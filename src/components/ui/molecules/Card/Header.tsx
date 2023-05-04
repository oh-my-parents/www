import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLHeadingElement> & {};

const Header = ({ children, className, ...props }: Props) => {
  return (
    <h2 className={cn($.header, className)} {...props}>
      {children}
    </h2>
  );
};

export default Header;
