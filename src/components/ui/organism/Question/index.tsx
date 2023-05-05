import $ from "./index.module.scss";
import cn from "classnames";
import Card from "@/components/ui/molecules/Card";

export default function Question() {
  return (
    <Card.Container className={cn($["question-container"])}>
      <Card.Header className={cn($.header)}>
        <Card.CardIndex current={1} length={10} />
      </Card.Header>
      <Card.Body className={cn($.body)}>
        아버지와 언제 마지막으로 통화했나요?
      </Card.Body>
      <Card.Footer className={cn($.footer)}>📕💐</Card.Footer>
    </Card.Container>
  );
}
