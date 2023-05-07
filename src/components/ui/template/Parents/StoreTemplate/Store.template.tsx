import cn from "classnames";
import $ from "./index.module.scss";
import ParentsNavigation from "@/components/ui/organism/ParentsNavigation";
import Card from "@/components/ui/molecules/Card";
import ParentsButton from "@/components/ui/molecules/ParentsButton";
import Icon from "@/components/ui/atoms/Icon/Icon";
import Typography from "@/components/ui/atoms/Typography/Typography";
import { useNavigate } from "react-router-dom";

const index = () => {
  const navigate = useNavigate();

  const onClickAgainButton = () => {
    navigate("/parents");
  };

  const onClickStoreButton = () => {};

  return (
    <div className={cn($.layout)}>
      <ParentsNavigation />
      <div className={cn($.storeBody)}>
        <Card.Container className={cn($.container)}>
          <Card.Header>
            <Icon size="large" variant="parents">
              👼🏻
            </Icon>
          </Card.Header>
          <Card.Body className={cn($.body)}>
            <h2>우리집 보물</h2>
          </Card.Body>
        </Card.Container>
        <Typography size="medium" variant="store">
          저장된 점수는 우리 아이가 <br />
          직접 확인할 수 있답니다.
        </Typography>
        <ParentsButton
          onClickAgainButton={onClickAgainButton}
          onClickStoreButton={onClickStoreButton}
        />
      </div>
    </div>
  );
};

export default index;
