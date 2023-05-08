import { parentType } from "@/apis/question/type";

export type GetChildAnswerRequest = {
  id: string;
  parentType: string;
};

export type ChildAnswer = {
  questionNumber: number;
  question: string;
  parentType: "FATHER" | "MOTHER";
  childAnswer: string;
};

// parents TYpe 들고 있고
/// id 들고 있고
// name
// answerd
// userQuwsetionWithChildAnswers

export type GetChildAnswerResponse = ResponseContainer<{
  userQuestionWithChildAnswers: ChildAnswer[];
  name: string;
  answered: boolean;
}>;

export type ParentAnswerRequest = {
  id: string;
  parentType: parentType;
  userParentAnswers: {
    number: number;
    score: number;
  }[];
};

export type ParentAnswerResponse = ResponseContainer<string>;
