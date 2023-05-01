type answer = {
  number: number,
  answer: string
};

type parentType = 'FATHER' | 'MOTHER';

type RequestData = {
    parentType: parentType,
    answers: answer[],
}

// POST /api/v1/child/answer


// 채점 
// POST /api/v1/parent/answer
