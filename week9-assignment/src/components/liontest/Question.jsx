import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Question = ({
  pageNumber,
  setPageNumber,
  question,
  setQuestion,
  clicked,
  setClicked,
  setFinalAnswer,
  finalAnswer,
}) => {
  const [userAnswer, setUserAnswer] = useState(0);

  const handleClickNextBtn = () => {
    setFinalAnswer(
      finalAnswer.concat({
        id: pageNumber,
        answer: userAnswer,
      })
    );
    setPageNumber((pageNumber) => pageNumber + 1);
  };
  const handleClickAnswerButton = (a) => {
    setUserAnswer(a);
  };

  // <Answer /> 얘 클릭하는건 그냥 100번이고 다시 선택할 수 있음
  //
  //
  return (
    <QuestionSection>
      <Title>{question.title}</Title>
      <AnswerSection>
        {question.answerList &&
          question.answerList.map((answer, _) => (
            <Answer
              key={answer.aid}
              clicked={userAnswer === answer.aid}
              onClick={() => handleClickAnswerButton(answer.aid)}
            >
              {answer.content}
            </Answer>
          ))}
      </AnswerSection>
      <NextButton onClick={handleClickNextBtn}>다음</NextButton>
    </QuestionSection>
  );
};

export default Question;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: #ffa43c;
  color: white;
  cursor: pointer;
  width: 15%;
  border-radius: 20px;
`;

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  color: #424242;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 15px;
`;

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.clicked ? "orange" : "beige")};
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
