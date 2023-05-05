import Typography from "@/components/ui/atoms/Typography/Typography";
import KakaoButton from "@/components/ui/molecules/KakaoButton";
import $ from "./mainItems.module.scss";
import ToggleButton from "../../molecules/ToogleButton";
import Logo from "../../molecules/Logo";

// state
import { useRecoilValue } from "recoil";
import { IsLogin } from "@/utils/recoil/atom";

export default function MainItems() {
  const isLogin = useRecoilValue(IsLogin);

  return (
    <div className={$.mainLayout}>
      <div className={$.musicButtonContainer}>
        <ToggleButton isOn={false} onToggle={() => {}} />
      </div>
      <Logo size="medium" variant="plain">
        Oh my parents
      </Logo>
      <Typography size="large" variant="main">
        당신의 부모님, <br /> 어디까지 <br /> 알고있나요?
      </Typography>
      {isLogin ? <div>로그인 되었습니다.</div> : <KakaoButton />}
    </div>
  );
}
