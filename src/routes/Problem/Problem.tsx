import { useEffect } from "react";
import Button from "@/components/ui/atoms/Button/Button";
import useGetQuestions from "@/hooks/useGetQuestions";
import { useNavigate, useParams } from "react-router-dom";
import ProblemLayout from "@/components/ui/template/ProblemLayout";

const Problem = () => {
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
    <>
      <ProblemLayout pageNumber={id} />
    </>
  );
};

export default Problem;
