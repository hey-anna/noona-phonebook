import React from "react";
import { createStore } from "redux";
import reducer from "./reducer/reducer";

// 두번째, store 만들어주기
let store = createStore(reducer);
// store는 그냥 생성되는것이 아니라, stroe를 바꿔줄 수 있는 reducer를 같이 들고가야한다.

export default store;
