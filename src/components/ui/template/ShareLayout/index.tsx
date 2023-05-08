import $ from "./index.module.scss";
import Card from "../../molecules/Card";
import Icon from "../../atoms/Icon/Icon";
import cn from "classnames";
import ProblemNavigation from "../../organism/ProblemNavigation";
import KakaoButton from "../../molecules/KakaoButton";
import Typography from "../../atoms/Typography/Typography";
import { useRecoilValue } from "recoil";
import { Parents } from "@/utils/recoil/atom";
import { APP_HOST } from "@/constants/api.constants";
import authManager from "@/utils/authManager/authManager";
import { decode } from "@/utils/jwt";

export default function ShareLayout() {
  const parents = useRecoilValue(Parents);
  const parent = parents === "MOTHER" ? "어머니" : "아버지";
  const parentIcon = parents === "MOTHER" ? "👩🏻" : "👨🏻";

  const kakaoButton = () => {
    const { sub } = decode(authManager.getToken()!);
    const encId = encodeURI(sub!);
    const encParents = encodeURI(parents);
    const url = `${APP_HOST}/parents/${encId}/${encParents}`;

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
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        buttons: [
          {
            title: "채점하러 가기",
            link: {
              mobileWebUrl: url,
              webUrl: url,
            },
          },
        ],
      });
    }
  };

  return (
    <div className={$.parentsSelect}>
      <ProblemNavigation className={$.problemNavigation} />
      <Card.Container className={cn($.container)}>
        <Card.Header>
          <Icon size="large" variant="parents">
            {parentIcon}
          </Icon>
        </Card.Header>
        <Card.Body className={cn($.body)}>
          <h2>{parent}</h2>
        </Card.Body>
      </Card.Container>
      <KakaoButton className={cn($.check)} onClick={kakaoButton}>
        {`${parent}께 채점받기`}
      </KakaoButton>
      <Typography size="medium" variant="share">
        부모님이 채점을 완료하시면 점수를 확인할 수 있어요!
      </Typography>
    </div>
  );
}
