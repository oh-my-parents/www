import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HomeTemplate } from "@/components/ui/template/Parents";
import useGetChildrenReponse from "@/hooks/useGetChildrenReponse";
import { parentType } from "@/apis/question/type";
import Loading from "@/components/ui/template/Loading/Loading";
import { useSetRecoilState } from "recoil";
import { ChildrenId, Parents } from "@/utils/recoil/atom";

const Home = () => {
  const navigate = useNavigate();
  const { id, parents } = useParams();
  const userId = decodeURI(id!);
  const setParents = useSetRecoilState(Parents);
  const setId = useSetRecoilState(ChildrenId);
  const { childName } = useGetChildrenReponse(userId, parents as parentType);

  const lazyNaviage = () => {
    setTimeout(() => {
      navigate("/parents/intro");
    }, 3000);
  };
  React.useEffect(() => {
    setId(userId);
    setParents(parents as parentType);

    if (childName) lazyNaviage();
  }, [childName]);

  if (!childName) return <Loading />;
  return <HomeTemplate name={childName} parentType={parents as parentType} />;
};

export default Home;
