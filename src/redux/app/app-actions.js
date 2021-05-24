//import types from "./app-types";
import axios from "axios";
import { createAction } from "@reduxjs/toolkit";
//import { uuid } from "uuidv4";

axios.defaults.baseURL = "http://localhost:4040";

/* const addContact = (contactData) => ({
  type: types.ADD_CONTACT,
  payload: {
    id: uuid(),
    name: contactData.name,
    number: contactData.number,
  },
}); */
//----------------------------------------------------------------------
/* const addContact = createAction("app/addContact", (contactData) => {
  return {
    payload: {
      id: uuid(),
      name: contactData.name,
      number: contactData.number,
    },
  };
}); */
//-----------------------------------------------------------------------

const addContactRequest = createAction("contacts/addContactRequest");
const addContactSuccess = createAction("contacts/addContactSuccess");
const addContactError = createAction("contacts/addContactError");

const deleteContactRequest = createAction("contacts/deleteContactRequest");
const deleteContactSuccess = createAction("contacts/deleteContactSuccess");
const deleteContactError = createAction("contacts/deleteContactError");

const fetchContactRequest = createAction("contacts/fetchContactRequest");
const fetchContactSuccess = createAction("contacts/fetchContactSuccess");
const fetchContactError = createAction("contacts/fetchContactError");
/* const deleteContact = (contactId) => ({
  type: types.DELETE_CONTACT,
  payload: { contactId: contactId },
}); */
//const deleteContact = createAction("app/deleteContact");

/* const filterSet = (str) => ({
  type: types.FILTER_SET,
  payload: str,
});
 */
const filterSet = createAction("app/setFilterArr");

export default {
  filterSet,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
};
