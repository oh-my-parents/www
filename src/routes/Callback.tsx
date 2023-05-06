import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQueryParams from "@/hooks/useQueryParams";
import authService from "@/service/auth.service";
import { useSetRecoilState } from "recoil";
import { IsLogin } from "@/utils/recoil/atom";
import MainLayout from "@/components/ui/template/MainLayout";

const Callback = () => {
  const code = useQueryParams("code");
  const setLogin = useSetRecoilState(IsLogin);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const loginResult = await authService.login(code!);
      setTimeout(() => {
        setLogin(loginResult);
        navigate("/");
      }, 100);
    })();
    return () => {};
  }, [code]);

  return <MainLayout />;
};

export default Callback;
