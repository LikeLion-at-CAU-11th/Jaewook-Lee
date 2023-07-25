import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/context";
import Form from "./Form";
import { Button } from "../layout/common";
import { isSubmitedAtom } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const FormSection = () => {
  const mode = useContext(ThemeContext);

  const [modal, setModal] = useState(false);

  const handleClick = () => {
    setModal(!modal);
  };

  return (
    <>
      <Form type="text" inputType="이름" placeholder="이름" />
      <Form type="email" inputType="이메일" placeholder="이메일" />
      <Form type="birthday" inputType="생년월일" placeholder="YYYYMMDD" />
      <Button mode={mode.button} onClick={handleClick}>
        제출
      </Button>
      {modal && <Modal modal={modal} setModal={setModal} />}
    </>
  );
};

export default FormSection;
