import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {};

const Footer = ({ children, className, ...props }: Props) => {
  return (
    <footer className={cn($.footer, className)} {...props}>
      {children}
    </footer>
  );
};

export default Footer;
