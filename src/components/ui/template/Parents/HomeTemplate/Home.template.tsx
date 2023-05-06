import Logo from "@/components/ui/molecules/Logo";
import $ from "./index.module.scss";
import cn from "classnames";
import josa from "@/utils/josa";

const HomeTemplate = () => {
  const name = "우와아";
  const displayName = josa.이가(name);
  return (
    <div className={cn($.homeContainer, $.fadeout)}>
      <header className={$.homeHeader}>
        <div className={$.logoConatiner}>
          <Logo size="medium" variant="gradient">
            Oh my parents
          </Logo>
        </div>
        <h1
          className={$.greeting}
        >{`${displayName}\n직접 쓴\n아버지 소개서`}</h1>
      </header>
      <div className={$.angel}>👼🏻</div>
    </div>
  );
};

export default HomeTemplate;
