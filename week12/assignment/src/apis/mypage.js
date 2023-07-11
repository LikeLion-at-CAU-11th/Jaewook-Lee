import { getAuthAxios } from "./authAxios";

export const getMypage = async () => {
  const access = localStorage.getItem("access");
  const authAxios = getAuthAxios(access);
  const result = await authAxios.get("/mypage");
  return result.data;
};
