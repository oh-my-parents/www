import { HTMLAttributes } from "react";
import Typography from "../../atoms/Typography/Typography";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = HTMLAttributes<HTMLParagraphElement> & {};

const HelperText = ({ children, className, ...props }: Props) => {
  return (
    <Typography
      size="medium"
      variant="default"
      className={cn($.helperText, className)}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default HelperText;
