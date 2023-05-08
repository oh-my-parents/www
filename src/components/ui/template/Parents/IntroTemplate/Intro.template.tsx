import ParentsNavigation from "@/components/ui/organism/ParentsNavigation";
import ParentsCard from "@/components/ui/organism/ParentsCard";
import $ from "./index.module.scss";
import cn from "classnames";
import TEXT from "@/constants/text.json";
import Typography from "@/components/ui/atoms/Typography/Typography";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Parents, Id } from "@/utils/recoil/atom";
import useGetChildrenReponse from "@/hooks/useGetChildrenReponse";
import { parentType } from "@/apis/question/type";

const IntroTemplate = () => {
  const navigate = useNavigate();
  const { answered } = useGetChildrenReponse(
    useRecoilValue(Id),
    useRecoilValue(Parents) as parentType,
  );

  const onClickButton = () => {
    navigate("/parents/report");
  };

  return (
    <div className={cn($.introContainer)}>
      <ParentsNavigation hasBackButton />
      <ParentsCard.Container className={cn($.card)}>
        <ParentsCard.Header type="intro">
          {TEXT.PARENTS.INTRO.HEADER}
        </ParentsCard.Header>
        <ParentsCard.Body>
          <ParentsCard.Text>
            {answered
              ? TEXT.PARENTS.INTRO.ANSWERED_DESCRIPTION
              : TEXT.PARENTS.INTRO.DESCRIPTION}
          </ParentsCard.Text>
          <ParentsCard.ButtonGroup>
            <ParentsCard.Button onClick={onClickButton}>
              {TEXT.PARENTS.ANSWER.WRONG}
            </ParentsCard.Button>
            <ParentsCard.Button onClick={onClickButton} isPositive>
              {TEXT.PARENTS.ANSWER.RIGHT}
            </ParentsCard.Button>
          </ParentsCard.ButtonGroup>
        </ParentsCard.Body>
      </ParentsCard.Container>
      <Typography size="small" variant="default" className={cn($.shadowText)}>
        {TEXT.PARENTS.INTRO.SHADOW}
      </Typography>
    </div>
  );
};

export default IntroTemplate;
