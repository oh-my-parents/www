import $ from "./index.module.scss";
import Typography from "../../atoms/Typography/Typography";
import cn from "classnames";
import Icon from "../../atoms/Icon/Icon";
import soon from "/images/soon.svg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SoonLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 3000);
  }, []);

  return (
    <div className={cn($.layout)}>
      <Typography size="large" variant="soon">
        5월 8일부터
        <br />
        채점이 가능해요!
      </Typography>
      <div className={cn($.icon)}>
        <Icon src={soon} size="medium" variant="soon" />
        <Icon size="medium" variant="please">
          🙏
        </Icon>
      </div>
    </div>
  );
}
