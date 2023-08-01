import { atom } from "recoil";

export const isSubmitedAtom = atom({
  key: "isSubmited",
  default: false,
});

export const userNameAtom = atom({
  key: "userName",
  default: "홍길동",
});

export const emailAtom = atom({
  key: "email",
  default: "@@@",
});

export const birthdayAtom = atom({
  key: "birthday",
  default: "20230724",
});
