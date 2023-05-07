import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";
import Card from "@/components/ui/molecules/Card";

type Props = HTMLAttributes<HTMLHeadingElement> & {
  type: "intro" | "default";
};

const Header = ({ children, className, type, ...props }: Props) => {
  return (
    <Card.Header className={cn($.header, className, $[type])} {...props}>
      {children}
    </Card.Header>
  );
};

export default Header;
