import axios from "axios";

export const signup = async (id, pw, name, age) => {
  const result = await axios.post("http;//front.cau-likelion.org/signup", {
    id,
    pw,
    name,
    age,
  });
  return result.data;
};
