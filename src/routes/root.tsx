import Button from "@/components/ui/atoms/Button/Button";
import Typography from "@/components/ui/atoms/Typography/Typography";
import { KAKAO_BUTTON_URL } from "@/constants/api.constants";
import useGetQuestions from "@/hooks/useGetQuestions";
import scoreService from "../service/score.service";
import Input from "@/components/ui/atoms/Input";

export default function Root() {
  const { getQuestions } = useGetQuestions();

  const onClickkakaoButton = () => {
    window.location.replace(KAKAO_BUTTON_URL);
  };

  const onClickParentButton = (e: any) => {
    getQuestions(e.target.value);
  };

  const getScore = () => {
    console.log(scoreService.getScore());
  };

  return (
    <>
      <div
        style={{
          margin: "0 auto 0 auto",
          paddingTop: "10vh",
          justifyContent: "center",
          flexDirection: "column",
          width: "80vw",
          gap: "16px",
        }}
      >
        <div
          style={{
            background: "#ffffff20",
            display: "flex",
            flexDirection: "row",
            marginTop: "6vh",
          }}
        />
        <h1
          style={{
            textAlign: "center",
            // background: "linear(-45deg, #ffffff, #000000)",
            color: "white",
            fontSize: "24px",
            letterSpacing: "-1.8px",
          }}
        >
          Oh my parents
        </h1>
        <h2
          style={{
            margin: "0",
            color: "linear(-45deg, #ffffff, #ffffff00)",
            width: "100%",
            textAlign: "center",
            fontSize: "56px",
            padding: "16px 8px 16px 8px ",
            letterSpacing: "-4px",
            fontWeight: "border",
            fontFamily: "Pretendard Variable",
          }}
        >
          <span style={{ display: "block" }}>당신의 부모님,</span>
          <span style={{ display: "block" }}>어디까지</span>
          <span style={{ display: "block" }}>알고 있나요?</span>
        </h2>
        <div
          style={{ background: "#24FF0030", width: "100%", height: "8vh" }}
        />
        <Button
          children="카카오톡으로 시작하기"
          onClick={onClickkakaoButton}
          variant="kakao"
          size="medium"
          isLoading={false}
        />
      </div>
    </>
  );
}
