export type parentType = "FATHER" | "MOTHER";

type QuestionType = "SELECT" | "WORD" | "SENTENCE" | "DROPDOWN";
type Choice = { number: number; content: string };
type Question = {
  number: number;
  content: string;
  choices: Choice[];
  questionType: QuestionType;
};

export type QuestionsData = {
  questionDTOs: Question[];
};
