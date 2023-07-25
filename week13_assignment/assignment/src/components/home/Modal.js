import React, { useContext } from "react";
import { Title } from "../layout/common";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  userNameAtom,
  emailAtom,
  birthdayAtom,
  isSubmitedAtom,
} from "../../recoil/atoms";
import styled from "styled-components";
import { ThemeContext } from "../../context/context";
import { useNavigate } from "react-router-dom";

const Modal = ({ modal, setModal }) => {
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const birthday = useRecoilValue(birthdayAtom);

  const mode = useContext(ThemeContext);
  console.log(mode);

  const setSubmit = useSetRecoilState(isSubmitedAtom);

  const navigate = useNavigate();

  const submit = () => {
    setModal(!modal);
    isSubmitedAtom(true);
    navigate("/mypage");
  };

  const cancel = () => {
    setModal(!modal);
    navigate("/");
  };

  return (
    <Container mode={mode.main}>
      <ModalBackground>
        <ModalBlock>
          <Title>제출하기 전에 확인 부탁드립니다</Title>
          <p>이름: {userName}</p>
          <p>이메일: {email}</p>
          <p>생년월일: {birthday}</p>
          <ButtonSection>
            <ModalButton mode={mode.button} onClick={submit}>
              확인
            </ModalButton>
            <ModalButton mode={mode.button} onClick={cancel}>
              취소
            </ModalButton>
          </ButtonSection>
        </ModalBlock>
      </ModalBackground>
    </Container>
  );
};

export default Modal;

const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const ModalBackground = styled.div`
  position: fixed;
  width: 70vw;
  height: 70vh;
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
`;

const ModalBlock = styled.div`
  position: absolute;
  top: 6.5rem;
  border-radius: 10px;
  padding: 1.5rem;
  background-color: white;
  color: black;
  width: 700px;
  box-shadow: 1px 1px 1px 1px gray;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonSection = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
`;

const ModalButton = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: white;
  padding: 10px;
  border-radius: 24px;
  cursor: pointer;
`;
