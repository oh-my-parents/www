import $ from "./index.module.scss";
import Card from "../../molecules/Card";
import Icon from "../../atoms/Icon/Icon";
import mother from "/images/mother.svg";
import father from "/images/father.svg";
import cn from "classnames";

type Props = {
  onClickMotherButton: any;
  onClickFatherButton: any;
};

export default function SelectParents({
  onClickMotherButton,
  onClickFatherButton,
}: Props) {
  return (
    <div className={cn($.selectParents)}>
      <Card.Container className={cn($.container)} onClick={onClickMotherButton}>
        <Card.Body className={cn($.body)}>
          <Icon size="large" variant="default" src={mother} />
          <h2>어머니</h2>
        </Card.Body>
      </Card.Container>
      <Card.Container className={cn($.container)} onClick={onClickFatherButton}>
        <Card.Body className={cn($.body)}>
          <Icon size="large" variant="parents" src={father} />
          <h2>아버지</h2>
        </Card.Body>
      </Card.Container>
    </div>
  );
}
