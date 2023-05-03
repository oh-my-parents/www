import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
type QuestionAtom = string[];

export const Question = atom<QuestionAtom>({
  key: "Question",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
