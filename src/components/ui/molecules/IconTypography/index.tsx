import Icon from "../../atoms/Icon/Icon";
import Typography from "../../atoms/Typography/Typography";
import $ from "./iconTypography.module.scss";

type Props = {
  src: string;
  size: "small" | "medium" | "large";
  variant: "kakao" | "main" | "logo" | "default" | "parents" | "variant";
  children: string;
};

export default function IconTypography({
  src,
  size,
  variant,
  children,
}: Props) {
  return (
    <div className={$.iconTypography}>
      <Icon src={src} size={size} variant={variant} />
      <Typography size={size} variant={variant}>
        {children}
      </Typography>
    </div>
  );
}
