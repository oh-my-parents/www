import $ from "./index.module.scss";
import Button from "../../atoms/Button/Button";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  array: string[];
  onClick?: any;
};

export default function SelectAnswer({ onClick, array }: Props) {
  const onClickSelectButton = (index: any) => {
    onClick(index);
  };

  return (
    <div className={$.selectAnswer}>
      {array.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => onClickSelectButton(index)}
            size="large"
            variant="answer"
          >
            {item}
          </Button>
        );
      })}
    </div>
  );
}
