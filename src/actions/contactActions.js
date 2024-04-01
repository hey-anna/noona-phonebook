export const ADD_CONTACT = "ADD_CONTACT";
export const SEARCH_CONTACT = "SEARCH_CONTACT";

export const addContact = (contact) => ({
  type: ADD_CONTACT,
  payload: contact,
});

export const searchContact = (keyword) => ({
  type: SEARCH_CONTACT,
  payload: keyword,
});
