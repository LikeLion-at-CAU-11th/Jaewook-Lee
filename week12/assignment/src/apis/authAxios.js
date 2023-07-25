import axios from "axios";
import { getNewRefreshToken } from "./refresh";

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: "http://front.cau-likelion.org",
    headers: {
      Authorization: token,
    },
  });
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status === 401) {
        //토큰이 만료된 경우
        console.log(error);
        //refresh token을 사용해서 재발급
        const { accessToken, refreshToken } = await getNewRefreshToken();
        error.config.headers.Authorization = accessToken;
        localStorage.setItem("access", accessToken);
        localStorage.setItem("refresh", refreshToken);
        return (await axios.get(error.config.url, error.config)).data;
      }
    }
  );
  return authAxios;
};
