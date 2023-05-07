import { HTMLAttributes } from "react";
import cn from "classnames";
import $ from "./index.module.scss";
import Card from "../../molecules/Card";

type Props = HTMLAttributes<HTMLDivElement>;

const Container = ({ children, className, ...props }: Props) => {
  return (
    <Card.Container className={cn($.container, className)} {...props}>
      {children}
    </Card.Container>
  );
};

export default Container;
