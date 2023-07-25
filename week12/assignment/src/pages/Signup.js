import React from "react";
import { Input, Inputs, Title, Wrapper } from "../components/Common";
import { useForm } from "../hooks/useForm";
import { styled } from "styled-components";
import { signup } from "../apis/signup";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePW] = useForm();
  const [name, onChangeName] = useForm();
  const [age, onChangeAge] = useForm();
  const router = useNavigate();
  const onClick = async () => {
    await signup(id, pw, name, age);
    router("/");
  };
  return (
    <Wrapper>
      <Title>회원가입하기</Title>
      <Inputs>
        <Input
          placeholder="아이디"
          type="text"
          value={id}
          onChange={onChangeId}
        ></Input>
        <Input
          placeholder="비밀번호"
          type="password"
          value={pw}
          onChange={onChangePW}
        ></Input>
        <Input
          placeholder="이름"
          type="text"
          value={name}
          onChange={onChangeName}
        ></Input>
        <Input
          placeholder="나이"
          type="text"
          value={age}
          onChange={onChangeAge}
        ></Input>
      </Inputs>
      <Button onClick={onClick}>Sign Up</Button>
    </Wrapper>
  );
};

export default SignUp;

const Button = styled.div`
  background-color: black;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 10px;
  margin-top: 20px;
`;
