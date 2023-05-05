import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useQueryParams from "@/hooks/useQueryParams";
import authService from "@/service/auth.service";
import { useSetRecoilState } from "recoil";
import { IsLogin } from "@/utils/recoil/atom";

const Callback = () => {
  const code = useQueryParams("code");
  const setLogin = useSetRecoilState(IsLogin);

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const loginResult = await authService.login(code!);
      setLogin(loginResult);
      navigate("/");
    })();
    return () => {};
  }, [code]);

  return <div>Redirect Page</div>;
};

export default Callback;
