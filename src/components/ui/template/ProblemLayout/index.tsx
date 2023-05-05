import $ from "./index.module.scss";
import ProblemNavigation from "../../organism/ProblemNavigation";
import { Outlet, useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { Question } from "@/utils/recoil/atom";

type Props = {
  pageNumber: string;
};

export default function ProblemLayout({ pageNumber }: Props) {
  const navigate = useNavigate();
  const setQuestion = useSetRecoilState(Question);

  const onClickBackButton = () => {
    if (Number(pageNumber) === 1) {
      navigate("/problem");
      setQuestion([]);
    } else {
      navigate(`/problem/${Number(pageNumber) - 1}`);
    }
  };

  return (
    <div className={$.problemLayout}>
      <div className={$.problemLayoutBody}>
        <ProblemNavigation onClickLeft={onClickBackButton} />
        <Outlet />
      </div>
    </div>
  );
}
