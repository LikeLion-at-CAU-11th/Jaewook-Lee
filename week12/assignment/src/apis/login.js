import axios from "axios";

export const login = async (id, pw) => {
  try {
    const result = await axios.post("http://front.cau-likelion.org", {
      id,
      pw,
    });
    console.log(result.data.data);
    const { accessToken, refreshToken } = result.data.data;
    localStorage.setItem("access", accessToken);
    localStorage.setItem("refresh", refreshToken);
    return true;
  } catch (error) {
    if (error.response.status === 401) {
      alert("비밀번호가 틀렸습니다");
      return false;
    }
  }
};
