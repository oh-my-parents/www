// 채점 데이터

// /api/v1/parent/answer/1

type ParentAnswer = {
  number: number;
  answer: string;
};

type userID = string;

type ParentRequestData = {
  userID: userID;
  answers: answer[];
};

// POST /api/v1/child/answer

// 채점
// POST /api/v1/parent/answer
