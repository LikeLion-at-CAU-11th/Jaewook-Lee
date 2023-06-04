import React, { useState } from "react";
import styled from "styled-components";
import {
  getUserPerGender,
  getUserPerPage,
  getUserPerStack,
} from "../../apis/lioninfo";

const FilterButton = ({
  title,
  type,
  setUserData,
  setClicked,
  id,
  clicked,
}) => {
  const handleClickButton = async () => {
    // type 에 따라서 어떤 api를 호출할건지를 결정해주는 함수
    if (type === "page") {
      const response = await getUserPerPage(1);
      setUserData(response.data.data);
    } else if (type === "stack") {
      const response = await getUserPerStack(title);
      setUserData(response.data.data);
    } else if (type === "gender") {
      const response = await getUserPerGender(title);
      setUserData(response.data.data);
    }
    setClicked(id);
  };

  return (
    <Button clicked={clicked === id} onClick={handleClickButton}>
      {title}
    </Button>
  );
};

export default FilterButton;

const Button = styled.div`
  flex-basis: 13%;
  height: 70px;
  color: gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  background-color: ${(props) => (props.clicked ? "orange" : "beige")};
`;
