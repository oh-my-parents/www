import Button from "@/components/ui/atoms/Button/Button";
import Typography from "@/components/ui/atoms/Typography/Typography";
import useGetQuestions from "@/hooks/useGetQuestions";
import { Question } from "@/utils/recoil/atom";
import { useEffect } from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";

type Props = {};

const ProblemDetailPages = (props: Props) => {
  const { id } = useParams();
  const questions = useRecoilValue(Question);
  const currnetQuestion = questions[Number(id) - 1];
  return (
    <div>
      <p>문제 상세페이지</p>
      <h2>{currnetQuestion}</h2>
    </div>
  );
};

export default ProblemDetailPages;
