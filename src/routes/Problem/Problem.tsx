import { useEffect } from "react";
import useGetQuestions from "@/hooks/useGetQuestions";
import { useNavigate, useParams } from "react-router-dom";
import ProblemLayout from "@/components/ui/template/ProblemLayout";
import ParentsSelect from "@/components/ui/template/ParentsSelect";
import { useSetRecoilState } from "recoil";
import { Answer, Parents } from "@/utils/recoil/atom";

const Problem = () => {
  const { questions, getQuestions } = useGetQuestions();
  const navigate = useNavigate();
  const { id } = useParams();
  const setParents = useSetRecoilState(Parents);
  const setAnswer = useSetRecoilState(Answer);
  const onClickMotherButton = async () => {
    await getQuestions("MOTHER");
    setParents("MOTHER");
    navigate("/problem/1");
  };
  const onClickFatherButton = async () => {
    await getQuestions("FATHER");
    setParents("FATHER");
    navigate("/problem/1");
  };

  useEffect(() => {
    if (questions.length === 0) {
      setAnswer([]);
      setParents("");
    }
    return () => {};
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
