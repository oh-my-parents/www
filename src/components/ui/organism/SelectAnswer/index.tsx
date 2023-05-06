import $ from "./index.module.scss";
import Button from "../../atoms/Button/Button";
import { Choice } from "@/apis/question/type";

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  choices: Choice[];
};

export default function SelectAnswer({ onClick, choices }: Props) {
  if (!choices.length) return null;

  let copied = [...choices];
  let contents = copied
    .sort((a, b) => a.number - b.number)
    .map((item) => item.content);

  return (
    <div className={$.selectAnswer}>
      {choices &&
        contents.map((content, index) => {
          return (
            <Button key={index} onClick={onClick} size="large" variant="answer">
              {content}
            </Button>
          );
        })}
    </div>
  );
}
