import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getAllUser, getUserPerPage } from "../../apis/lioninfo";

const Pagination = ({ clicked, userData, setUserData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  //현재 페이지의 상태 -> 이벤트 일어나면 setCurrentPage

  const handlePageClick = async (pageNumber) => {
    const response = await getUserPerPage(pageNumber);
    setCurrentPage(pageNumber);
    setUserData(response.data.data);
  };

  const pageNumbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <PaginationDom>
      {pageNumbers.map((pageNumber, i) => (
        <PageNum
          key={i}
          clicked={currentPage === pageNumber}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </PageNum>
      ))}
    </PaginationDom>
  );
};

export default Pagination;

const PaginationDom = styled.div`
  display: flex;
  gap: 20px;
`;

const PageNum = styled.div`
  color: ${(props) => (props.clicked ? "black" : "gray")};
  font-size: 25px;
  font-weight: ${(props) => (props.clicked ? "bold" : "normal")};
  cursor: pointer;
`;

{
  /* <PageNum clicked={currentPage === 1} onClick={() => handlePageClick(1)}>
        1
      </PageNum>
      <PageNum clicked={currentPage === 1} onClick={() => handlePageClick(2)}>
        2
      </PageNum>
      <PageNum clicked={currentPage === 1} onClick={() => handlePageClick(3)}>
        3
      </PageNum>
      <PageNum clicked={currentPage === 1} onClick={() => handlePageClick(4)}>
        4
      </PageNum>
      <PageNum clicked={currentPage === 1} onClick={() => handlePageClick(5)}>
        5
      </PageNum>
      <PageNum clicked={currentPage === 1} onClick={() => handlePageClick(6)}>
        6
      </PageNum>
      <PageNum clicked={currentPage === 1} onClick={() => handlePageClick(7)}>
        7
      </PageNum> */
}
