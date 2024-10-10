import { fetchData, postData } from "../../services/apiServices"; // Import location methods

const state = () => ({
  locationList: [], // List of all locationList
  location: null, // Selected location details
  loading: false, // Loading state for asynchronous actions
});

const actions = {
  // Adds a new location and commits it to the state
  async addLocation({ commit }, location) {
    try {
      const newLocation = await postData("saveLocation", location);
      commit("SAVE_LOCATION", newLocation);
    } catch (error) {
      console.error("Failed to save location:", error);
    }
  },

  // Fetches list of locationList and commits it to the state
  async loadlocationList({ commit }) {
    commit("setLoading", true);
    try {
      const response = await fetchData("memberList");
      if (Array.isArray(response)) {
        commit("GET_LOCATION_LIST", response);
      } else {
        console.error("Fetched data is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching locationList:", error);
    } finally {
      commit("setLoading", false);
    }
  },

  // Fetches details of a single location based on ID and updates the form data
  //   async findLocation({ state }, memberid) {
  async findLocation({ state }) {
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
      console.error("Error fetching location:", error);
    }
  },

  // Other actions...

  async deleteLocationData({ commit }, memberId) {
    try {
      await fetchData("deleteLocation", { id: memberId });
      commit("DELETE_MEMBER", memberId);
    } catch (error) {
      console.error("Failed to delete location:", error);
    }
  },
};

const mutations = {
  // Adds a new location to the locationList list
  SAVE_LOCATION(state, location) {
    state.locationList.push(location);
  },

  // Sets the list of locationList in the state
  GET_LOCATION_LIST(state, locationList) {
    state.locationList = locationList;
  },

  DELETE_MEMBER(state, memberId) {
    state.locationList = state.locationList.filter(
      (m) => m.member_id !== memberId
    );
  },
  // Sets the loading state for async actions
  setLoading(state, loading) {
    state.loading = loading;
  },
};

const getters = {
  // Returns the list of locationList from the state
  getMembers(state) {
    return state.locationList;
  },

  // Returns the details of a single location from the state
  getMember(state) {
    return state.location;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
