import React from "react";
import { useNavigate } from "react-router-dom";
import { HomeTemplate } from "@/components/ui/template/Parents";

const Home = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    setTimeout(() => {
      navigate("intro");
    }, 3000);
  }, []);

  return <HomeTemplate />;
};

export default Home;
