export type Answer = { number: number; answer: string };
export type UserAnswerRequest = {
  parentType: string;
  userChildAnswers: Answer[];
};
