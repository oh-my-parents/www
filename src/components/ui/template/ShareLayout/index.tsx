import $ from "./index.module.scss";
import Card from "../../molecules/Card";
import Icon from "../../atoms/Icon/Icon";
import cn from "classnames";
import ProblemNavigation from "../../organism/ProblemNavigation";
import KakaoButton from "../../molecules/KakaoButton";
import Typography from "../../atoms/Typography/Typography";

export default function ShareLayout() {
  return (
    <div className={$.parentsSelect}>
      <ProblemNavigation className={$.problemNavigation} />
      <Card.Container className={cn($.container)}>
        <Card.Header>
          <Icon size="large" variant="parents">
            😀
          </Icon>
        </Card.Header>
        <Card.Body className={cn($.body)}>
          <h2>어머니</h2>
        </Card.Body>
      </Card.Container>
      <KakaoButton className={cn($.check)} onClick={() => ""}>
        아버지께 채점받기
      </KakaoButton>
      <Typography size="medium" variant="share">
        부모님이 채점을 완료하시면 점수를 확인할 수 있어요!
      </Typography>
    </div>
  );
}
