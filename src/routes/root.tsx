import Button from "@/components/ui/atoms/Button/Button";
import Typography from "@/components/ui/atoms/Typography/Typography";

export default function Root() {
  return (
    <>
      <Button
        children="카카오톡으로 로그인"
        onClick={() => ""}
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
    </>
  );
}
