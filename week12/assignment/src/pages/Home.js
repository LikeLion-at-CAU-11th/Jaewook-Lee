import React from "react";
import { Input, Inputs, Title, Wrapper, Form } from "../components/Common";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { login } from "../apis/login";

const Home = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePW] = useForm();
  const router = useNavigate();
  const onClick = async () => {
    const result = await login(id, pw);
    console.log(result);
    const { accessToken, refreshToken } = result;
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
    router("/mypage");
  };
  return (
    <Wrapper>
      <Title>로그인하기</Title>
      <Form>
        <Inputs>
          <Input
            placeholder={"아이디"}
            type="text"
            value={id}
            onChange={onChangeId}
          />
          <Input
            placeholder={"비밀번호"}
            type="password"
            value={pw}
            onChange={onChangePW}
          />
        </Inputs>
        <Button onClick={onClick}>Login</Button>
      </Form>
      <CustomLink to="/signup">회원가입하기</CustomLink>
    </Wrapper>
  );
};

export default Home;

const Button = styled.div`
  background-color: black;
  color: white;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
