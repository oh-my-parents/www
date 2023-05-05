import $ from "./index.module.scss";
import cn from "classnames";

type Props = React.HTMLAttributes<HTMLTextAreaElement> & {
  size: "small" | "medium" | "large";
  variant: "default";
};
export default function TextArea({
  onChange,
  size,
  variant,
  className,
}: Props) {
  return (
    <>
      <textarea
        onChange={onChange}
        className={cn($[size], $[variant], className)}
      />
    </>
  );
}
