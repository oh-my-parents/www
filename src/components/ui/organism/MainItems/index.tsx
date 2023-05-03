import Typography from "@/components/ui/atoms/Typography/Typography";
import KakaoButton from "@/components/ui/molecules/KakaoButton";
import $ from "./mainItems.module.scss";
import FlexButtons from "../../molecules/FlexButtons";
import Logo from "../../molecules/Logo";

export default function MainItems() {
  return (
    <div className={$.mainLayout}>
      <FlexButtons />
      <Logo size="medium" variant="plain">
        Oh my parents
      </Logo>
      <Typography size="large" variant="main">
        당신의 부모님, <br /> 어디까지 <br /> 알고있나요?
      </Typography>
      <KakaoButton />
    </div>
  );
}
