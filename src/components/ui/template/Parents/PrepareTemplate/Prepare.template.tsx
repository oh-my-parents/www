import cn from "classnames";
import $ from "./index.module.scss";
import ParentsNavigation from "@/components/ui/organism/ParentsNavigation";
import Card from "@/components/ui/molecules/Card";
import Icon from "@/components/ui/atoms/Icon/Icon";
import Typography from "@/components/ui/atoms/Typography/Typography";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../../Loading/Loading";

const index = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        navigate("/parents/store");
      }, 2000);
    }
  }, [loading]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loading />;

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
        <Typography size="medium" variant="prepare">
          채점을 완료했어요!
          <br />
        </Typography>
      </div>
    </div>
  );
};

export default index;
