import $ from "./index.module.scss";
import Button from "../../atoms/Button/Button";
import cn from "classnames";
import KakaoButton from "../KakaoButton";
import { APP_HOST } from "@/constants/api.constants";

export default function ParentsButton({ onClickAgainButton }: any) {
  const onClick = () => {
    if (window.Kakao) {
      const kakao = window.Kakao;

      if (!kakao.isInitialized()) {
        kakao.init(import.meta.env.VITE_APP_KAKAO_JAVASCRIPT_KEY);
      }

      kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "어버이날 모의고사",
          description: "부모님 얼마나 알고계신가요?",
          imageUrl: `${APP_HOST}/images/seo.png`,
          link: {
            mobileWebUrl: APP_HOST,
            webUrl: APP_HOST,
          },
        },
        buttons: [
          {
            title: "문제풀러가기",
            link: {
              mobileWebUrl: APP_HOST,
              webUrl: APP_HOST,
            },
          },
        ],
      });
    }
  };

  return (
    <div className={cn($.parentsButton)}>
      <Button size="medium" variant="again" onClick={onClickAgainButton}>
        다시 채점하기
      </Button>
      <KakaoButton className={$.kakaoButton} onClick={onClick}>
        친구에게 공유하기
      </KakaoButton>
    </div>
  );
}
