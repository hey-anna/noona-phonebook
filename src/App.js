// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { ContactForm } from "./component/ContactForm";
import { ContactList } from "./component/ContactList";

// 1. 왼쪽에는 연락처 등록하는 폼 [o]
// 1. 오른쪽에는 연락처 리스트와 search창이 있다 [o]
// 2. 리스트에 유저 이름과 전화번호를 추가할 수 있다( 이름 & 폰넘버 입력 >> create )
// 3. 리스트에 아이템이 몇개 있는지 보인다.
// 4. 사용자가 유저를 이름검색으로 찾을 수 있다

// 구조분석
// 타이틀/ 왼쪽 UI디자인/ 오른쪽 UI디자인

// unknown person 유저모양 이미지

// Form에 입력한 값을 읽어와야 함(내가 입력한 값을 받아와야 한다.)

function App() {
  return (
    <>
      <h1 className="title">연락처</h1>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <ContactList />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
