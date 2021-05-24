const getIsLoading = (state) => state.app.loading;
const getFilter = (state) => state.app.filter;
const getContacts = (state) => state.app.contacts;

export default {
  getIsLoading,
  getFilter,
  getContacts,
};
