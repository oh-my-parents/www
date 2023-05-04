import Icon from "../../atoms/Icon/Icon";
import Button from "../../atoms/Button/Button";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  src: string;
  iconSize: "small" | "medium" | "large";
  buttonSize: "small" | "medium" | "large";
  iconVariant: "kakao" | "main" | "logo" | "default" | "music";
  buttonVariant: "kakao" | "music" | "arrow" | "answer";
};

export default function IconButton({
  onClick,
  src,
  iconSize,
  buttonSize,
  iconVariant,
  buttonVariant,
}: Props) {
  return (
    <Button onClick={onClick} size={buttonSize} variant={buttonVariant}>
      <Icon src={src} size={iconSize} variant={iconVariant} />
    </Button>
  );
}
