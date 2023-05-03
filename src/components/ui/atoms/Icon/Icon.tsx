import cn from "classnames";
import $ from "./icon.module.scss";

type Props = {
  src: string;
  size: "small" | "medium" | "large";
  variant: string;
};

function Icon({ src, size, variant }: Props) {
  return <img src={src} className={cn($.img, $[size], $[variant])} alt="" />;
}

export default Icon;
