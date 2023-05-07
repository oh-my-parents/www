import { selector } from "recoil";
import { UserResultAnswer } from "./atom";

export const userSscoreSum = selector<number>({
  key: "userSscoreSum",
  get: ({ get }) => {
    const lists = get(UserResultAnswer);
    return lists.reduce((curr, acc) => curr + acc.parentScore, 0);
  },
});
