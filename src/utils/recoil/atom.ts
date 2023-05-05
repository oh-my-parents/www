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
