import $ from "./index.module.scss";
import Typography from "../../atoms/Typography/Typography";
import cn from "classnames";
import Icon from "../../atoms/Icon/Icon";
import soon from "/images/soon.svg";
export default function SoonLayout() {
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
