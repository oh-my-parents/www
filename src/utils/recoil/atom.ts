import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const Question = atom({
  key: "Question",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
