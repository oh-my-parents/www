import Typography from "@/components/ui/atoms/Typography/Typography";
import KakaoButton from "@/components/ui/molecules/KakaoButton";
import $ from "./mainItems.module.scss";
import Logo from "../../molecules/logo";
import ToggleButton from "../../molecules/ToogleButton";

export default function MainItems() {
  return (
    <div className={$.mainLayout}>
      <div className={$.musicButtonContainer}>
        <ToggleButton isOn={false} onToggle={() => {}} />
      </div>
      <Logo size="medium" variant="logo" />
      <Typography size="large" variant="main">
        당신의 부모님, <br /> 어디까지 <br /> 알고있나요?
      </Typography>
      <KakaoButton />
    </div>
  );
}
