import MainLayout from "@/components/ui/template/MainLayout";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { Question } from "@/utils/recoil/atom";

export default function Main() {
  const setQuestion = useSetRecoilState(Question);

  useEffect(() => {
    setQuestion([]);
  }, []);

  return <MainLayout />;
}
