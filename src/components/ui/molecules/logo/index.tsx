import Typography from "../../atoms/Typography/Typography";

type Props = {
  size: string;
  variant: string;
};

export default function Logo({ size, variant }: Props) {
  return (
    <Typography size={size} variant={variant}>
      Oh my parents
    </Typography>
  );
}
