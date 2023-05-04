import Card from "@/components/ui/molecules/Card";
import cn from "classnames";
import $ from "./sample.module.scss";

export default function Sample() {
  return (
    <div>
      <h1>카드 예시</h1>
      <Card.Container className={cn($["question-container"])}>
        <Card.Header className={cn($.header)}>
          <Card.CardIndex current={1} length={10} />
        </Card.Header>
        <Card.Body className={cn($.body)}>
          아버지가 가장 좋아하는 음식은 무엇인가요?
        </Card.Body>
        <Card.Footer className={cn($.footer)}>📕💐</Card.Footer>
      </Card.Container>

      <Card.Container className={cn($.answerCard)}>
        <Card.Shilling>😳</Card.Shilling>
        <Card.HelperText className={cn($.helperTextTop)}>
          아버지는
        </Card.HelperText>
        <Card.Body className={cn($.body)}>
          <input />
        </Card.Body>
        <Card.HelperText>좋다고 하셨어</Card.HelperText>
        <Card.JokeText className={cn($.jokeText)}>
          야이야이야... 이렇게 살아가고 ~
        </Card.JokeText>
      </Card.Container>
    </div>
  );
}
