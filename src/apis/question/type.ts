type answer = {
  number: number;
  answer: string;
};

type parentType = "FATHER" | "MOTHER";

type RequestData = {
  parentType: parentType;
  answers: answer[];
};
