import React, { useEffect, useState } from "react";
import { getMypage } from "../apis/mypage";
import { useNavigate } from "react-router-dom";

const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const router = useNavigate();
  useEffect(() => {
    //mypage 정보를 불러오기
    getMypage()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          alert("토큰이 만료되어서 다시 로그인 해주세요");
          localStorage.removeItem("access");
          localStorage.removeItem("refresh");
          router("/");
        }
      });
  }, []);
  if (loading) return <div>로딩중...</div>;
  return (
    <div>
      <div>{data?.name}</div>
      <div>{data?.age}</div>
    </div>
  );
};

export default Mypage;
