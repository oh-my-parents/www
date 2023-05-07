import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { HomeTemplate } from "@/components/ui/template/Parents";
import useGetChildrenReponse from "@/hooks/useGetChildrenReponse";
import { parentType } from "@/apis/question/type";
import Logo from "@/components/ui/molecules/Logo";

const Home = () => {
  const navigate = useNavigate();
  const { id, parents } = useParams();
  const { childName } = useGetChildrenReponse(id!, parents as parentType);

  const lazyNaviage = () => {
    setTimeout(() => {
      navigate("/parents/intro");
    }, 3000);
  };
  React.useEffect(() => {
    childName && lazyNaviage();
  }, [childName]);

  if (!childName)
    return (
      <div>
        <Logo variant="gradient" size="large" />
      </div>
    );
  return <HomeTemplate name={childName} />;
};

export default Home;
