import React, { useEffect } from "react";
import styled from "styled-components";

const Result = ({ result }) => {
  useEffect(() => {
    result.incorrect.map((i, idx) => {
      console.log(i);
    });
  }, [result]);
  return (
    <Dom>
      <Total>점수 : {result.result}/9 </Total>
      <Incorrect>틀린 문제</Incorrect>
      {result.incorrect &&
        result.incorrect.map(
          (
            data,
            i //반환값이 1개일때는 소괄호
          ) => (
            <Question key={i}>
              <Title>{data.title}</Title>
              <Answer>{data.answer}</Answer>
            </Question>
          )
        )}
    </Dom>
  );
};

export default Result;

const Dom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Total = styled.div`
  font-size: 30px;
  font-weight: 500;
`;

const Question = styled.div`
  width: 100%;
`;

const Answer = styled.div`
  font-size: 15px;
`;

const Incorrect = styled.div`
  width: 100%;
  font-size: 26px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
