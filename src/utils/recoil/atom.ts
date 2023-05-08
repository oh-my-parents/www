import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import authManager from "@/utils/authManager/authManager";
import { Question as QusetionType } from "@/apis/question/type";
import { ChildAnswer } from "@/apis/user/parent/type";

const { persistAtom } = recoilPersist();
type QuestionAtom = QusetionType[];

export const Question = atom<QuestionAtom>({
  key: "Question",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const IsLogin = atom<boolean>({
  key: "IsLogin",
  default: authManager.getToken() !== null,
});

export const Parents = atom<string>({
  key: "Parents",
  default: "FATHER",
  effects_UNSTABLE: [persistAtom],
});

export const Answer = atom<string[]>({
  key: "Answer",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

/**
 * not implemented
 */
// export type ParentsReciveAnswerType = {

// }

export const ParentsReciveAnswer = atom<ChildAnswer[]>({
  key: "ParentsReciveAnswer",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export type UserResultAnswerType = ChildAnswer & {
  parentScore: number;
};

export const UserResultAnswer = atom<UserResultAnswerType[]>({
  key: "UserResultAnswer",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

/**
 * {1: ture, 2:false, }
 */
export type AtomParentsSelectAnswerType = {
  [questionNumber: number]: boolean;
};

export const ParentsSelectAnswer = atom<AtomParentsSelectAnswerType>({
  key: "ParentsSelectAnswer",
  default: {},
  effects_UNSTABLE: [persistAtom],
});

export const IsAnswered = atom<boolean>({
  key: "IsAnswered",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const ChildName = atom<string>({
  key: "ChildName",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const Id = atom<string>({
  key: "Id",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export const ResultUserScore = atom<{ name: string; score: number }>({
  key: "ResultUserScore",
  default: { name: "", score: 0 },
  effects_UNSTABLE: [persistAtom],
});

export const UserName = atom<string>({
  key: "UserName",
  default: "",
});

export const ChildrenId = atom<string>({
  key: "ChildrenId",
  default: "",
});
