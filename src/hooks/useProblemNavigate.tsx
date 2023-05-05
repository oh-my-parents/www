import { useNavigate, useParams } from "react-router-dom";

const useProblemNavigate = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  return (next: number) => {
    navigate(`/problem/${Number(id) + next}`);
  };
};

export default useProblemNavigate;
