type SelectAnswer = {
  answerType: "select";
  choices: string[];
};

type WordAnswer = {
  answerType: "word";
};

type SentenceAnswer = {
  answerType: "sentence";
};

type DropdownAnswer = {
  answerType: "dropdown";
};

type Question =
  | SelectAnswer
  | WordAnswer
  | SentenceAnswer
  | (DropdownAnswer & {
      id: number;
      title: string;
    });
