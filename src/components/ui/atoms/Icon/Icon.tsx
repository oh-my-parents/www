import cn from "classnames";
import $ from "./icon.module.scss";

type Props = HTMLImageElement & {
  size: "small" | "medium" | "large";
  variant: "default";
};

function Icon({ src, size, variant }: Props) {
  return <img src={src} alt="" className={cn($.icon, $[size], $[variant])} />;
}

export default Icon;
