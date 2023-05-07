import ParentsNavigation from "@/components/ui/organism/ParentsNavigation";
import ParentsCard from "@/components/ui/organism/ParentsCard";
import $ from "./index.module.scss";
import cn from "classnames";
import TEXT from "@/constants/text.json";
import Typography from "@/components/ui/atoms/Typography/Typography";

const IntroTemplate = () => {
  return (
    <div className={cn($.introContainer)}>
      <ParentsNavigation hasBackButton />
      <ParentsCard.Container className={cn($.card)}>
        <ParentsCard.Header type="intro">
          {TEXT.PARENTS.INTRO.HEADER}
        </ParentsCard.Header>
        <ParentsCard.Body>
          <ParentsCard.Text>{TEXT.PARENTS.INTRO.DESCRIPTION}</ParentsCard.Text>
          <ParentsCard.ButtonGroup>
            <ParentsCard.Button>{TEXT.PARENTS.ANSWER.WRONG}</ParentsCard.Button>
            <ParentsCard.Button isPositive>
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
