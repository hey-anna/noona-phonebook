// (따로 폴더 만드는 이유는, 앞으로 여러개 파일 만들것이라서)
// reducer는 기능에 따라 여러 파일로 만들어 줄 수 있음

// reducer는 항상 두개의 매개변수를 가져간다.
// reducet는 state를 바꿔야 하니깐, state가 필요
// useDispatch를 통해서 action을 던져주면, reducer가 멀 받아야 멀 해야 될지 알지
// 그래서 항상 두개의 알규먼트를 받는다.

// state 같은경우에는 처음에 이니셜 스테이트를 넣어줘야 함 = state초기화를 해줘야 함
// 처음에 어떤 state가 있을지, 어떤걸 관리를 하는지 기본세팅값을 넣어줘야 하기 때문에

// const ADD_CONTACT = "ADD_CONTACT";
// const SEARCH_CONTACT = "SEARCH_CONTACT";
// import { ADD_CONTACT, SEARCH_CONTACT } from "./contactActions";
import { ADD_CONTACT, SEARCH_CONTACT } from "../../actions/contactActions";
let initialState = {
  contactList: [],
  searchResults: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contactList: [
          ...state.contactList,
          action.payload,
          //   {
          //     name: payload.name,
          //     phoneNumber: payload.phoneNumber,
          //   },
        ],
      };
    case SEARCH_CONTACT:
      // 페이로드를 기준으로 연락처 검색
      const filteredContacts = state.contactList.filter((contact) =>
        contact.name.toLowerCase().includes(action.payload.toLowerCase())
      );
      return {
        ...state,
        searchResults: filteredContacts,
      };
    default: {
      return { ...state };
    }
  }
}

export default reducer;
