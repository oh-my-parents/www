import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "./index.module.scss";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  size: "small" | "medium" | "large";
  variant: "plain" | "gradient";
};

export default function Logo({ children, size, variant }: Props) {
  return (
    <Link className={cn($.a, $[size], $[variant])} to={"/"}>
      {children}
    </Link>
  );
}
