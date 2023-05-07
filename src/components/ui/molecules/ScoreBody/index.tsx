import $ from "./index.module.scss";
import Typography from "../../atoms/Typography/Typography";
import cn from "classnames";
import Icon from "../../atoms/Icon/Icon";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function ScoreBody({ icon, title, description }: Props) {
  return (
    <div className={cn($.layout)}>
      <Icon size="large" variant="default" className={cn($.icon)}>
        {icon}
      </Icon>
      <Typography size="medium" variant="default" className={cn($.title)}>
        {title}
      </Typography>
      <Typography size="medium" variant="default" className={cn($.description)}>
        {description}
      </Typography>
    </div>
  );
}
