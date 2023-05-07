import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";
import Card from "../../molecules/Card";

type Props = HTMLAttributes<HTMLParagraphElement>;

const Body = ({ children, className, ...props }: Props) => {
  return (
    <Card.Body className={cn($.body, className)} {...props}>
      {children}
    </Card.Body>
  );
};

export default Body;
