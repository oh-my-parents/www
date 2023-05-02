import Button from "@/components/ui/atoms/Button/Button";
import Typography from "@/components/ui/atoms/Typography/Typography";
import Input from "@/components/ui/atoms/Input";
import { KAKAO_BUTTON_URL } from "@/constants/api.constants";

export default function Root() {
  const onClickkakaoButton = () => {
    window.location.replace(KAKAO_BUTTON_URL);
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
        onClick={() => ""}
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
        <Input variant="default" size="medium" placeholder="안녕하세요" />
      </div>
      <div>
        <Input variant="default" size="large" />
      </div>
    </>
  );
}
