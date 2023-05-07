import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import authManager from "@/utils/authManager/authManager";
import { Question as QusetionType } from "@/apis/question/type";

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
  default: "",
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

// export const ParentsReciveAnswer = atom<string[]>({
//   key: "ParentsReciveAnswer",
//   default: [],
//   effects_UNSTABLE: [persistAtom],
// });

export type AtomParentsSelectAnswerType = {
  [questionNumber: number]: boolean;
};

export const ParentsSelectAnswer = atom<AtomParentsSelectAnswerType>({
  key: "ParentsSelectAnswer",
  default: {},
  effects_UNSTABLE: [persistAtom],
});
