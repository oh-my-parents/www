import Typography from "@/components/ui/atoms/Typography/Typography";
import KakaoButton from "@/components/ui/molecules/KakaoButton";
import $ from "./mainItems.module.scss";
import cn from "classnames";
import Logo from "../../molecules/Logo";
import UserButton from "../../molecules/UserButton";
import { AiOutlinePoweroff } from "react-icons/ai";
// state
import { useRecoilState } from "recoil";
import { IsLogin } from "@/utils/recoil/atom";

export default function MainItems() {
  const [isLogin, setIsLogin] = useRecoilState(IsLogin);

  const onClickLogout = () => {
    setIsLogin(false);
  };

  return (
    <div className={$.mainLayout}>
      <div className={$.logoutButton}>
        <AiOutlinePoweroff
          onClick={onClickLogout}
          className={cn({ [$.logout]: !isLogin }, "drop-shadow")}
        />
      </div>
      <Logo size="medium" variant="plain">
        Oh my parents
      </Logo>
      <Typography size="large" variant="main">
        당신의 부모님, <br /> 어디까지 <br /> 알고있나요?
      </Typography>
      {isLogin ? <UserButton /> : <KakaoButton />}
    </div>
  );
}
