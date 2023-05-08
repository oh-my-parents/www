import { Link } from "react-router-dom";
import cn from "classnames";
import $ from "./index.module.scss";
import TEXT from "@/constants/text.json";

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
  size: "small" | "medium" | "large";
  variant: "plain" | "gradient";
};

export default function Logo({ size, variant, className }: Props) {
  return (
    <Link className={cn($.a, $[size], $[variant], className)} to={"/"}>
      {TEXT.LOGO}
    </Link>
  );
}
