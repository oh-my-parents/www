export type parentType = "FATHER" | "MOTHER";

type QuestionType = "SELECT" | "WORD" | "SENTENCE" | "DROPDOWN";
export type Choice = { number: number; content: string };
export type Question = {
  number: number;
  content: string;
  choices: Choice[];
  questionType: QuestionType;
};

export type QuestionsData = {
  questionDTOs: Question[];
};
