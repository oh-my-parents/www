import useQueryParams from "@/hooks/useQueryParams";
import authService from "@/service/auth.service";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback = () => {
  const code = useQueryParams("code");
  const navigate = useNavigate();

  useEffect(() => {
    authService.login(code!);
    navigate("/");
    return () => {};
  }, [code]);

  return <div>Redirect Page</div>;
};

export default Callback;
