import { APP_HOST } from "@/constants/api.constants";
import Button from "../../atoms/Button/Button";
import KakaoButton from "../KakaoButton";
import $ from "./index.module.scss";
import cn from "classnames";
import { useNavigate } from "react-router-dom";

export default function ScoreButton() {
  const navigate = useNavigate();
  const onClickAgain = () => {
    navigate(-1);
  };

  const onClickcKakaoshare = () => {
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
            title: "나도 테스트하기",
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
    <div className={cn($.layout)}>
      <Button
        size="medium"
        variant="user"
        className={cn($.user)}
        onClick={onClickAgain}
      >
        처음으로 돌아가기
      </Button>
      <KakaoButton onClick={onClickcKakaoshare} className={cn($.kakao)}>
        카카오톡으로 테스트 공유하기
      </KakaoButton>
    </div>
  );
}
