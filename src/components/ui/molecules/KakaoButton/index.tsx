import Button from "../../atoms/Button/Button";
import IconTypography from "../IconTypography";
import kakaoTalk from "/images/kakaotalk.svg";
import { KAKAO_BUTTON_URL } from "@/constants/api.constants";

export default function KakaoButton() {
  const onClickKakaoButton = () => {
    window.location.replace(KAKAO_BUTTON_URL);
  };

  return (
    <Button size="medium" variant="kakao" onClick={onClickKakaoButton}>
      <IconTypography
        src={kakaoTalk}
        size="small"
        variant="kakao"
        children="카카오톡으로 시작하기"
      />
    </Button>
  );
}
