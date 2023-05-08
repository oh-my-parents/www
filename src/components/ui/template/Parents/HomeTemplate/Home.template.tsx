import Logo from "@/components/ui/molecules/Logo";
import $ from "./index.module.scss";
import cn from "classnames";
import josa from "@/utils/josa";
import { parentType } from "@/apis/question/type";

const HomeTemplate = ({
  name,
  parentType,
}: {
  name: string;
  parentType: parentType;
}) => {
  const parentsDisplay = parentType === "FATHER" ? "아버지" : "어머니";
  const displayName = josa.이가(name);

  return (
    <div className={cn($.homeContainer)}>
      <header className={$.homeHeader}>
        <div className={$.logoConatiner}>
          <Logo size="medium" variant="gradient" />
        </div>
        <h1
          className={$.greeting}
        >{`${displayName}\n직접 쓴\n ${parentsDisplay} 소개서`}</h1>
      </header>
      <div className={$.angel}>👼🏻</div>
    </div>
  );
};

export default HomeTemplate;
