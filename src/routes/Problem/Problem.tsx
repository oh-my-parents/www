import { useEffect } from "react";
import useGetQuestions from "@/hooks/useGetQuestions";
import { useNavigate, useParams } from "react-router-dom";
import ProblemLayout from "@/components/ui/template/ProblemLayout";
import ParentsSelect from "@/components/ui/template/ParentsSelect";
import { useSetRecoilState } from "recoil";
import { Parents } from "@/utils/recoil/atom";

const Problem = () => {
  const { questions, getQuestions } = useGetQuestions();
  const navigate = useNavigate();
  const { id } = useParams();
  const setParents = useSetRecoilState(Parents);

  const onClickMotherButton = () => {
    getQuestions("MOTHER");
    setParents("MOTHER");
  };
  const onClickFatherButton = () => {
    getQuestions("FATHER");
    setParents("FATHER");
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
