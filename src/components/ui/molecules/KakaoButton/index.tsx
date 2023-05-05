import Button from "../../atoms/Button/Button";
import IconTypography from "../IconTypography";
import kakaoTalk from "/images/kakaotalk.svg";

type Props = {
  children: string;
  onClick: any;
  className: string;
};

export default function KakaoButton({ children, onClick, className }: Props) {
  return (
    <Button
      size="medium"
      variant="kakao"
      onClick={onClick}
      className={className}
    >
      <IconTypography src={kakaoTalk} size="small" variant="kakao">
        {children}
      </IconTypography>
    </Button>
  );
}
