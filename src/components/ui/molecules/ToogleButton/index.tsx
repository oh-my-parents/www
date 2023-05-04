import cn from "classnames";
import $ from "./index.module.scss";

type ToggleButtonProps = {
  isOn: boolean;
  onToggle: () => void;
  className?: string;
};

const ToggleButton = ({ isOn, onToggle, className }: ToggleButtonProps) => {
  return (
    <label className={cn($.switch, className)}>
      <input
        className={$.input}
        type="checkbox"
        checked={isOn}
        onChange={onToggle}
      />
      <span className={cn($.round)} />
    </label>
  );
};

export default ToggleButton;
