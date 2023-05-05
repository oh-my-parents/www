import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import authManager from "@/utils/authManager/authManager";

const { persistAtom } = recoilPersist();
type QuestionAtom = string[];

export const Question = atom<QuestionAtom>({
  key: "Question",
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const IsLogin = atom<boolean>({
  key: "IsLogin",
  default: authManager.getToken() !== null,
});
