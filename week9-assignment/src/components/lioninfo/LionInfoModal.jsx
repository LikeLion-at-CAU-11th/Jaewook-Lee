import React, { useState } from "react";
import styled from "styled-components";
import FilterButton from "./FilterButton";
import UserDataSection from "./UserDataSection";
import Pagination from "./Pagination";

const LionInfoModal = () => {
  const [userData, setUserData] = useState([]);
  const [clicked, setClicked] = useState(0);

  const category = [
    {
      type: "page",
      title: "All",
    },
    {
      type: "gender",
      title: "male",
    },
    {
      type: "gender",
      title: "female",
    },
    {
      type: "stack",
      title: "frontend",
    },
    {
      type: "stack",
      title: "backend",
    },
    {
      type: "stack",
      title: "design",
    },
    {
      type: "stack",
      title: "pm",
    },
  ];

  return (
    <Dom>
      <Title>🦁 LikeLion 11th 🦁</Title>
      <ButtonDom>
        {category.map(
          (
            c,
            i //c는 배열의 요소, i는 배열의 인덱스
          ) => (
            <FilterButton
              key={i}
              id={i}
              title={c.title}
              type={c.type}
              setUserData={setUserData}
              setClicked={setClicked}
              clicked={clicked}
            />
          )
        )}
      </ButtonDom>
      <UserDataSection userData={userData} />
      {clicked === 0 && (
        <Pagination
          clicked={clicked}
          userData={userData}
          setUserData={setUserData}
        />
      )}
    </Dom>
  );
};

export default LionInfoModal;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const ButtonDom = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: #ffd9b6;
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;
