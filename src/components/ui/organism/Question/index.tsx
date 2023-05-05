import $ from "./index.module.scss";
import cn from "classnames";
import Card from "@/components/ui/molecules/Card";
import { useEffect, useState } from "react";

type Props = {
  data: any;
};

export default function Question({ data }: Props) {
  const [newData, setNewData] = useState({
    content: "",
    number: 0,
  });

  useEffect(() => {
    if (data) {
      setNewData({ content: data.content, number: data.number });
    }
  }, [data]);

  return newData ? (
    <Card.Container className={cn($["question-container"])}>
      <Card.Header className={cn($.header)}>
        <Card.CardIndex current={data.number} length={10} />
      </Card.Header>
      <Card.Body className={cn($.body)}>{newData.content}</Card.Body>
      <Card.Footer className={cn($.footer)}>📕💐</Card.Footer>
    </Card.Container>
  ) : (
    <></>
  );
}
