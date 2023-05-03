import $ from "./flexButtons.module.scss";
import Button from "../../atoms/Button/Button";

export default function FlexButtons() {
  return (
    <div className={$.flexButton}>
      <Button size="small" onClick={() => ""} variant="music">
        🔈
      </Button>
      <Button size="small" onClick={() => ""} variant="music">
        🔊
      </Button>
    </div>
  );
}
