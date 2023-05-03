import Typography from "../../atoms/Typography/Typography";

type Props = {
  size: "small" | "medium" | "large";
  variant: "kakao" | "main" | "logo" | "default";
};

export default function Logo({ size, variant }: Props) {
  return (
    <Typography size={size} variant={variant}>
      Oh my parents
    </Typography>
  );
}
