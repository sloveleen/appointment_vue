import { fetchData, postData } from "../../services/apiServices"; // Import service methods

const state = () => ({
  serviceList: [], // List of all serviceList
  service: null, // Selected service details
  loading: false, // Loading state for asynchronous actions
});

const actions = {
  // Adds a new service and commits it to the state
  async saveService({ commit }, service) {
    try {
      const newMember = await postData("saveMember", service);
      commit("SAVE_MEMBER", newMember);
    } catch (error) {
      console.error("Failed to save service:", error);
    }
  },

  // Fetches list of serviceList and commits it to the state
  async loadServiceList({ commit }) {
    commit("setLoading", true);
    try {
      const response = await fetchData("memberList");
      if (Array.isArray(response)) {
        commit("GET_SERVICE_LIST", response);
      } else {
        console.error("Fetched data is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching serviceList:", error);
    } finally {
      commit("setLoading", false);
    }
  },

  // Fetches details of a single service based on ID and updates the form data
  //   async findService({ state }, memberid) {
  async findService({ state }) {
    // state.id = memberid;
    // let param = { member_id: memberid };

    try {
      //   const response = await fetchData("findMember", param);
      const response = await fetchData("findMember");

      if (response && typeof response === "object") {
        state.formdata = { ...response[0] }; // Assuming response is an array with one object
      } else {
        state.formdata = { ...response[0] }; // Fallback in case response is not as expected
        console.error("Fetched data is not an object:", response);
      }
    } catch (error) {
      console.error("Error fetching service:", error);
    }
  },

  // Other actions...

  async deleteMember({ commit }, memberId) {
    try {
      await fetchData("deleteMember", { id: memberId });
      commit("DELETE_MEMBER", memberId);
    } catch (error) {
      console.error("Failed to delete service:", error);
    }
  },
};

const mutations = {
  // Adds a new service to the serviceList list
  SAVE_MEMBER(state, service) {
    state.serviceList.push(service);
  },

  // Sets the list of serviceList in the state
  GET_SERVICE_LIST(state, serviceList) {
    state.serviceList = serviceList;
  },

  DELETE_MEMBER(state, memberId) {
    state.serviceList = state.serviceList.filter(
      (m) => m.member_id !== memberId
    );
  },
  // Sets the loading state for async actions
  setLoading(state, loading) {
    state.loading = loading;
  },
};

const getters = {
  // Returns the list of serviceList from the state
  getMembers(state) {
    return state.serviceList;
  },

  // Returns the details of a single service from the state
  getMember(state) {
    return state.service;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
