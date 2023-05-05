import { parentType } from "@/apis/question/type";

export type GetChildAnswerRequest = {
  id: number;
  parentType: string;
};

export type ParentAnswerRequest = {
  parentType: parentType;
  userParentAnswer: { number: number; score: number }[];
};

export type ParentAnswerResponse = ResponseContainer<string>;