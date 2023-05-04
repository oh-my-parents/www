import { HTMLAttributes } from "react";
import Typography from "../../atoms/Typography/Typography";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLParagraphElement> & {};

const JokeText = ({ children, className, ...props }: Props) => {
  return (
    <Typography
      size="small"
      variant="default"
      className={cn($.jokeText, className)}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default JokeText;
