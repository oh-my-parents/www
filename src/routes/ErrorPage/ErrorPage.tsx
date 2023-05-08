import $ from "./index.module.scss";
import { Link } from "react-router-dom";

const ErrorPages = () => {
  return (
    <div className={$.errorConatiner}>
      <h1 className={$.errorHeader}>헙! 여기는 오시면 안돼요</h1>
      <Link to="">홈으로 돌아가기</Link>
    </div>
  );
};

export default ErrorPages;
