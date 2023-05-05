import $ from "./index.module.scss";
import ProblemNavigation from "../../organism/ProblemNavigation";
import { useNavigate } from "react-router-dom";
import SelectParents from "../../organism/SelectParents";

type Props = {
  onClickMotherButton: any;
  onClickFatherButton: any;
};

export default function ParentsSelect({
  onClickMotherButton,
  onClickFatherButton,
}: Props) {
  const navigate = useNavigate();

  return (
    <div className={$.parentsSelect}>
      <ProblemNavigation
        className={$.problemNavigation}
        onClickLogo={() => navigate("/")}
        onClickLeft={() => navigate("/")}
      />
      <h1>누구에 대해 알아볼까요?</h1>
      <SelectParents
        onClickMotherButton={onClickMotherButton}
        onClickFatherButton={onClickFatherButton}
      />
    </div>
  );
}
