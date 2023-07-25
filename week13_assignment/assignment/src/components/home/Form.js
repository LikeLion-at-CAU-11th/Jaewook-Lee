import React from "react";
import { styled } from "styled-components";

import { useRecoilState } from "recoil";
import { userNameAtom, emailAtom, birthdayAtom } from "../../recoil/atoms";

const Form = ({ type, inputType }) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [birthday, setBirthday] = useRecoilState(birthdayAtom);

  const onChange = (e) => {
    const data = e.target.value;

    if (inputType === "이름") {
      setUserName(data);
    } else if (inputType === "이메일") {
      setEmail(data);
    } else if (inputType === "생년월일") {
      setBirthday(data);
    }
  };

  return (
    <Wrapper>
      <div>{inputType}</div>
      <input type={type} onChange={onChange} />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
