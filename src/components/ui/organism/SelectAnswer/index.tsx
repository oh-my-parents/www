import $ from "./index.module.scss";
import Button from "../../atoms/Button/Button";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  array: string[];
};

export default function SelectAnswer({ array }: Props) {
  return (
    <div className={$.selectAnswer}>
      {array.map((item, index) => {
        return (
          <Button key={index} onClick={() => ""} size="medium" variant="answer">
            {item}
          </Button>
        );
      })}
    </div>
  );
}
