import $ from "./index.module.scss";
import Typography from "../../atoms/Typography/Typography";
import cn from "classnames";

type Props = {
  name: string;
  score: number;
};

export default function ScoreHeader({ name, score }: Props) {
  return (
    <div className={cn($.layout)}>
      <Typography size="small" variant="default" className={cn($.logo)}>
        Oh my parents
      </Typography>
      <Typography size="small" variant="default" className={cn($.title)}>
        {`${name}님의 점수는?`}
      </Typography>
      <Typography size="large" variant="default" className={cn($.score)}>
        {`${score}점!`}
      </Typography>
    </div>
  );
}
