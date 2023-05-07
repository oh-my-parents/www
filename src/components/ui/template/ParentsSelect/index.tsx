import $ from "./index.module.scss";
import ProblemNavigation from "../../organism/ProblemNavigation";
import { useNavigate } from "react-router-dom";
import SelectParents from "../../organism/SelectParents";

type Props = {
  onClickMotherButton: any;
  onClickFatherButton: any;
  children: any;
};

export default function ParentsSelect({
  onClickMotherButton,
  onClickFatherButton,
  children,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className={$.parentsSelect}>
      <ProblemNavigation
        className={$.problemNavigation}
        onClickLogo={() => navigate("/")}
        onClickLeft={() => navigate("/")}
      />
      <h1>{children}</h1>
      <SelectParents
        onClickMotherButton={onClickMotherButton}
        onClickFatherButton={onClickFatherButton}
      />
    </div>
  );
}
