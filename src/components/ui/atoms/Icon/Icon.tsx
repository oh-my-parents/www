import cn from "classnames";
import $ from "./icon.module.scss";
type Props = {
  src?: string;
  size: "small" | "medium" | "large";
  variant:
    | "kakao"
    | "main"
    | "logo"
    | "default"
    | "music"
    | "parents"
    | "navigation"
    | "variant"
    | "soon"
    | "please";
  children?: React.ReactNode;
};

function Icon({ src, size, variant, children }: Props) {
  if (src) {
    return <img src={src} className={cn($.img, $[size], $[variant])} alt="" />;
  }
  return <span className={cn($.img, $[size], $[variant])}>{children}</span>;
}

export default Icon;
