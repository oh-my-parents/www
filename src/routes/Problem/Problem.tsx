import { useEffect } from "react";
import useGetQuestions from "@/hooks/useGetQuestions";
import { useNavigate, useParams } from "react-router-dom";
import ProblemLayout from "@/components/ui/template/ProblemLayout";
import ParentsSelect from "@/components/ui/template/ParentsSelect";

const Problem = () => {
  const { questions, getQuestions } = useGetQuestions();
  const navigate = useNavigate();
  const { id } = useParams();

  const onClickMotherButton = () => {
    getQuestions("MOTHER");
  };
  const onClickFatherButton = () => {
    getQuestions("FATHER");
  };

  useEffect(() => {
    if (questions.length !== 0) {
      navigate("/problem/1");
    }
  }, [questions]);

  if (!id) {
    return (
      <ParentsSelect
        onClickMotherButton={onClickMotherButton}
        onClickFatherButton={onClickFatherButton}
      />
    );
  }

  return (
    <>
      <ProblemLayout pageNumber={id} />
    </>
  );
};

export default Problem;
