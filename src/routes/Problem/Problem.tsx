import { useEffect } from "react";
import Button from "@/components/ui/atoms/Button/Button";
import useGetQuestions from "@/hooks/useGetQuestions";
import { Navigate, Outlet, useNavigate, useParams } from "react-router-dom";
import { Question } from "@/utils/recoil/atom";
import { useSetRecoilState } from "recoil";

type Props = {};

const Problem = (props: Props) => {
  const { questions, getQuestions } = useGetQuestions();
  const navigate = useNavigate();
  const { id } = useParams();

  const onClickParentButton = (e: any) => {
    getQuestions(e.target.value);
  };

  useEffect(() => {
    if (questions.length !== 0) {
      navigate("/problem/1");
    }
    console.log("id,", id);
  }, [questions]);

  if (!id) {
    return (
      <div>
        <Button
          onClick={onClickParentButton}
          value="MOTHER"
          size="large"
          variant="default"
        >
          엄마
        </Button>
        <Button
          onClick={onClickParentButton}
          value="FATHER"
          size="large"
          variant="default"
        >
          아빠
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p>문제 페이지들의 헤더영역</p>
        <button onClick={() => navigate(`/problem/${Number(id) + 1}`)}>
          다음
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Problem;
