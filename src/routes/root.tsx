import Button from "@/components/ui/atoms/Button/Button";
import Typography from "@/components/ui/atoms/Typography/Typography";
import { KAKAO_BUTTON_URL } from "@/constants/api.constants";
import questionService from "@/service/question.service";
import { Question } from "@/utils/recoil/atom";
import { useSetRecoilState } from "recoil";
import Input from "@/components/ui/atoms/Input";

export default function Root() {
  const onClickkakaoButton = () => {
    window.location.replace(KAKAO_BUTTON_URL);
  };

  const getQuestion = async () => {
    const questions = await questionService.getQuestions("MOHTER");
    const setQuestion = useSetRecoilState(Question);
    setQuestion(questions);
  };

  return (
    <>
      <Button
        children="카카오톡으로 로그인"
        onClick={onClickkakaoButton}
        variant="kakao"
        size="medium"
        isLoading={false}
      />
      <Button
        children="언제더라.."
        onClick={getQuestion}
        variant="answer"
        size="large"
        isLoading={false}
      />
      <Button
        children="이전"
        onClick={() => ""}
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
