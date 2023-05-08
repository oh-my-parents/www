import Logo from "../../molecules/Logo";
import $ from "./index.module.scss";

const Loading = () => {
  return (
    <div className={$.loadingContainer}>
      <Logo variant="gradient" size="medium" className={$.flash} />
    </div>
  );
};

export default Loading;
