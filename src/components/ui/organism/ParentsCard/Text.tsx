import { HTMLAttributes } from "react";
import Typography from "../../atoms/Typography/Typography";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLParagraphElement>;

const Text = ({ className, children }: Props) => {
  console.log(className);
  return (
    <Typography
      size="medium"
      variant="default"
      className={cn($.bodyText, className)}
    >
      {children}
    </Typography>
  );
};

export default Text;
