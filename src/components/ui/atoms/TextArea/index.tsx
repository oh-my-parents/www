import $ from "./index.module.scss";
import cn from "classnames";

type Props = React.HTMLAttributes<HTMLTextAreaElement> & {
  size: "small" | "medium" | "large";
  variant: "default";
  value?: string;
};
export default function TextArea({
  value,
  onChange,
  size,
  variant,
  className,
}: Props) {
  return (
    <>
      <textarea
        autoFocus
        onChange={onChange}
        value={value}
        className={cn($[size], $[variant], className)}
      />
    </>
  );
}
