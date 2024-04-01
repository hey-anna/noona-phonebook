// import React from "react";
// import { useState } from "react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Row, Col, Button, Form } from "react-bootstrap";
// import { searchContact } from "../actions/contactActions";

export const SearchBox = () => {
  //   const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };
  //   const search = (e) => {
  //     if (e.key === "Enter" || e.type === "click") {
  //       console.log("We click this key", e.key);
  //       //   let keyword = e.target.value;
  //       //   console.log("keyword", keyword);
  //       dispatch(searchContact(keyword));
  //       navigate(`/?q=${keyword}`);
  //     }
  //     // console.log("onKeyDown");
  //   };
  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            //   onKeyDown={(e) => search(e)}
          />
        </Col>
        <Col lg={2}>
          {/* <Button onClick={(e) => search(e)}>찾기</Button> */}
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};
