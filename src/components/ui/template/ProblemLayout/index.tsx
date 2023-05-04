import $ from "./index.module.scss";
import ProblemNavigation from "../../organism/ProblemNavigation";
import { Outlet, useNavigate } from "react-router-dom";

type Props = {
  pageNumber: string;
};

export default function ProblemLayout({ pageNumber }: Props) {
  const navigate = useNavigate();
  const onClickBackButton = () => {
    if (Number(pageNumber) === 1) {
      navigate("/");
    } else {
      navigate(`/problem/${Number(pageNumber) - 1}`);
    }
  };

  return (
    <div className={$.problemLayout}>
      <div className={$.problemLayoutBody}>
        <ProblemNavigation
          onClickLogo={() => navigate("/")}
          onClickLeft={onClickBackButton}
        />
        <Outlet />
      </div>
    </div>
  );
}
