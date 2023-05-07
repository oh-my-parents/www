import { parentType } from "@/apis/question/type";

export type GetChildAnswerRequest = {
  id: number;
  parentType: string;
};

export type ChildAnswer = {
  questionNumber: number;
  question: string;
  parentType: "FATHER" | "MOTHER";
  childAnswer: string;
};

export type GetChildAnswerResponse = ResponseContainer<{
  userQuestionWithChildAnswers: ChildAnswer[];
  name: string;
}>;

export type ParentAnswerRequest = {
  parentType: parentType;
  userParentAnswer: { number: number; score: number }[];
};

export type ParentAnswerResponse = ResponseContainer<string>;
