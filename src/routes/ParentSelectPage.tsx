import { useNavigate } from "react-router-dom";
import ParentsSelect from "@/components/ui/template/ParentsSelect";
import { useSetRecoilState } from "recoil";
import { Parents } from "@/utils/recoil/atom";
import useUserScore from "@/hooks/useUserScore";

export default function ParentSelectPage() {
  const navigate = useNavigate();
  const [_, setScore] = useUserScore();
  const setParents = useSetRecoilState(Parents);

  const onClickMotherButton = async () => {
    setParents("MOTHER");
    setScore("MOTHER");
    navigate("/score");
  };

  const onClickFatherButton = async () => {
    setParents("FATHER");
    setScore("FATHER");
    navigate("/score");
  };

  return (
    <ParentsSelect
      onClickMotherButton={onClickMotherButton}
      onClickFatherButton={onClickFatherButton}
    >
      누구에 대한 점수를 볼까요?
    </ParentsSelect>
  );
}
