import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

// 타입할 때마다 타입한 값을 읽어와서 저장

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
      //   payload: { name: name, phoneNumber: phoneNumber },
      // name라는 키값안에 name이라는 값을 넣는거고 phoneNumber는 phoneNumber에다가 보내는 것이다 // 키 값 벨류가 일치한다
    });
  };

  // 이 Form이 event를 호출할 때 마다
  // 모든 event 핸들러는 event라는 매개변수를 넘김
  // event라는 값을 매개변수로 넘겨줌
  // 이 event는요 form에 대한 정보를 가지고 있는데
  // 이안에 있는 값 value 값을 들고 있습니다.

  //   // form에서 입력한 값의 정보를 입력한값을 받아볼 수 있습니다.
  //   const getName = (event) => {
  //     // console.log(event.target.value); // 이 값을 name에다가 저장하면 된다.
  //     setName(event.target.value);
  //   };

  // !!! type이 submit인경우 >> onClick xx onSubmit oo
  // 버튼 클릭하면 온서브밋 이벤트가 어디서 발생하냐?, Form에서 발생한다.

  // 자꾸 리프레쉬 시키는게 폼의 특징

  // 액션을 누가 던져, 디스패치가 던져 준다.
  return (
    <>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            // onChange={getName}
            value={name}
            onChange={(event) => setName(event.target.value)} // 저장
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해주세요"
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)} // 저장
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </>
  );
};

// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function BasicExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default BasicExample;
