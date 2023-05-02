import Button from "@/components/ui/atoms/Button/Button";
import Typography from "@/components/ui/atoms/Typography/Typography";
import { KAKAO_BUTTON_URL } from "@/constants/api.constants";
import { useSetRecoilState } from "recoil";
import useGetQuestions from "@/hooks/useGetQuestions";
import scoreService from "../service/score.service";
import Input from "@/components/ui/atoms/Input";

export default function Root() {
  const { questions, getQuestions } = useGetQuestions();
  const onClickkakaoButton = () => {
    window.location.replace(KAKAO_BUTTON_URL);
  };

  const onClickParentButton = (e) => {
    getQuestions(e.target.value);
  };

  const getScore = () => {
    console.log(scoreService.getScore());
  };
  return (
    <>
      <Button
        children="zz 로그인"
        onClick={() => loginFn("testt")}
        variant="kakao"
        size="medium"
        isLoading={false}
      />
      <Button
        children="카카오톡으로 로그인"
        onClick={onClickkakaoButton}
        variant="kakao"
        size="medium"
        isLoading={false}
      />
      <Button
        children="언제더라.."
        onClick={onClickParentButton}
        variant="answer"
        size="large"
        value="mother"
        isLoading={false}
      />
      <Button
        children="이전"
        onClick={getScore}
        size="small"
        variant="before"
        isLoading={false}
      />
      <Button
        children="다음"
        onClick={() => ""}
        size="small"
        variant="next"
        isLoading={false}
      />
      <Button
        children="다음"
        onClick={() => ""}
        size="small"
        variant="next"
        isLoading={true}
      />
      <Typography variant="question" size="small">
        부모님 <br /> 얼마나 알고 계신가요?
      </Typography>
      <Typography variant="question" size="medium">
        부모님 <br /> 얼마나 알고 계신가요?
      </Typography>
      <Typography variant="question" size="large">
        부모님 <br /> 얼마나 알고 계신가요?
      </Typography>
      <div>
        <Input variant="default" size="small" />
      </div>
      <div>
        <Input
          variant="default"
          size="medium"
          placeholder="안녕하세요"
          type="datetime-local"
        />
      </div>
      <div>
        <Input variant="default" size="large" type="password" />
      </div>
    </>
  );
}
