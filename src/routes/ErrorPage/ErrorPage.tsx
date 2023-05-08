import { useEffect } from "react";
import $ from "./index.module.scss";
import { Link, useNavigate } from "react-router-dom";

const ErrorPages = () => {
  const discussion = "https://github.com/orgs/oh-my-parents/discussions";
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 4000);
  }, []);

  return (
    <div className={$.errorConatiner}>
      <h1 className={$.errorHeader}>에러발생! 😳</h1>
      <p>
        <strong>가능하시다면 어떤과정에서 에러가 발생했는지 알려주세요!</strong>
      </p>
      <p>곧 메인 페이지로 자동 이동합니다.</p>
      <p>
        <Link to={discussion}>문의 남기기</Link>
      </p>
      <nav>
        <p>
          <Link to="">홈으로 돌아가기</Link>
        </p>
      </nav>
    </div>
  );
};

export default ErrorPages;
