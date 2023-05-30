import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Question from "./Question";
import Result from "./Result";
import { getQuestion, getResult } from "../../apis/liontest";

const LionTestModal = () => {
  // 이 단계들을 제어하는 것

  // LionInfoModal 에서 getAllUSer () 전체 회원 데이터 다 받아와서
  // 페이지 넘버 버튼 누를 때 마다 슬라이싱 해줘서 보여주는

  // 1. 시작하기 버튼 (page 세팅) => getQuestion 이라는 메소드를 호출 (-1번 페이지)
  // 받은 response를 state 로 관리를 해야함
  // 화면이 리렌더링이 되려면 state의 변화가 감지되어야 함

  // 2. 문제 보여주기 <Question /> (다음 버튼이 page 세팅) (0 ~ 8)
  // 3. 결과보기 버튼 (page 세팅) (9)
  // 4. 결과 <Result /> (10)

  // API 자체가 전체 데이터를 한번에 보내준단 말야
  // 얘를 굳이 여러번 호출할 필요가 없어

  const [pageNumber, setPageNumber] = useState(-1);
  const [question, setQuestion] = useState([]); // 전체 문제들인거에는 변화가 없다.
  // qeustion안에 10개의 문제가 다 있고
  // 몇번째 인덱스의 문제를 보여줄 지를 우리가 제어를 해줘야해

  // 2. pageNumber가 이미 몇번째 인덱스를 보여줄지를 제어
  // question은 그 인덱스에 맞는 문제 1개로 세팅해주기

  const [finalAnswer, setFinalAnswer] = useState([]);
  const [result, setResult] = useState({});
  const [clicked, setClicked] = useState(0);

  // 부모에서 getResult API 를 호출하고 있는데,
  // finalAnswer 는 자식인 Quesiton에서 관리하고 있음

  const handleClickStartButton = async () => {
    const response = await getQuestion();
    const questions = response.data.data;
    setQuestion(questions);
    setPageNumber(pageNumber + 1);
  };

  const handleClickResultButton = async () => {
    const response = await getResult(finalAnswer);
    const results = response.data.data;
    setResult(results);
    setPageNumber(pageNumber + 1);
  };

  return (
    <Dom>
      <Title>🦁 멋사인 테스트 🦁</Title>
      <ContentBox>
        {pageNumber === -1 ? (
          <Button onClick={handleClickStartButton}>시작하기</Button>
        ) : pageNumber === question.length ? (
          <Button onClick={handleClickResultButton}>결과 보기</Button>
        ) : pageNumber === question.length + 1 ? (
          <Result result={result} />
        ) : (
          <Question
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            question={question[pageNumber]}
            setQuestion={setQuestion}
            clicked={clicked}
            setClicked={setClicked}
            finalAnswer={finalAnswer}
            setFinalAnswer={setFinalAnswer}
          />
        )}
      </ContentBox>
    </Dom>
  );
};

export default LionTestModal;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: gray;
  background-color: beige;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;
