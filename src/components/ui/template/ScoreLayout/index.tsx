import ScoreButton from "../../molecules/ScoreButton";
import ScoreHeader from "../../molecules/ScoreHeader";
import ScoreBody from "../../molecules/ScoreBody";
import $ from "./index.module.scss";
import { useEffect, useState } from "react";

export default function ScoreLayout() {
  const data = { name: "낙현", score: 100 };
  const [obj, setObj] = useState({
    name: "낙현",
    score: 32,
    icon: "🥔",
    title: "혹시 말하는 감자...?",
    description: "이번 기회에 부모님에 대해 좀 더 알아가는건 어떨까요?",
  });

  useEffect(() => {
    if (data.score < 20) {
      setObj({
        ...data,
        icon: "🥔",
        title: "혹시 말하는 감자...?",
        description: "이번 기회에 부모님에 대해 좀 더 알아가는건 어떨까요?",
      });
      return;
    }
    if (data.score < 40) {
      setObj({
        ...data,
        icon: "🥄",
        title: "효자 맛보기 스푼",
        description:
          "부모님을 사랑하지만 마음처럼 안 따라주는 당신!\n\n오늘 같은 날은 서른 한가지 맛 아이스크림 케이크\n사들고 집에 가는건 어때요?",
      });
      return;
    }
    if (data.score < 60) {
      setObj({
        ...data,
        icon: "🗣",
        title: "효자 호소인",
        description:
          "부모님을 사랑하지만 표현에 조금 서툰 당신!\n어떤 대답이 맞고 틀렸는지를 주제로 얘기하면서\n부모님과 조금 더 가까워지는 건 어때요?",
      });
      return;
    }
    if (data.score < 80) {
      setObj({
        ...data,
        icon: "🥣",
        title: "효자 한 사발",
        description:
          "진골 효자에 가까워지고 있는 당신!\n이 정도 점수면 스스로를 대견하게 생각해도 될 것 같아요.\n\n나: 기가 막히네 진짜 세상 살다 이렇게 맛있는 게 없네\n효도하는 나에 취한다\n\n부모님: ?",
      });
      return;
    }
    if (data.score < 100) {
      setObj({
        ...data,
        icon: "👃",
        title: "인간 코지마",
        description:
          "코~ 코코코 코지마 코지마 안마의자~🎶\n(PPL 아님️)\n\n1등 효도템 부럽지 않은 진골 효자인 당신!\n지금처럼 쭉 다정한 효자가 되어주세요!",
      });
      return;
    }
    setObj({
      ...data,
      icon: "🤼‍♂️",
      title: "혹시 부모님 본인이세요...?",
      description:
        "지금부터 부모님에 대한 지지관계를 철회한다.\n오늘부터 부모님과 나는 한 몸으로 간주하여\n부모님에 대한 공격은 나에 대한 공격으로 간주한다.",
    });
  }, []);
  return (
    <div>
      <div>
        <ScoreHeader name={obj.name} score={obj.score} />
        <ScoreBody
          icon={obj.icon}
          title={obj.title}
          description={obj.description}
        />
        <hr className={$.line} />
        <ScoreButton />
      </div>
    </div>
  );
}
