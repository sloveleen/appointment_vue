import { fetchData, postData } from "@/services/apiServices"; // Importing from apiService
import { apiMixin } from "@/store/apiMixin"; // Importing apiMixin for shared methods

const state = () => ({
  location_list: [],
  location: null,
  loading: false,
  responseMsg: "",
});

const actions = {
  async locationsList({ commit }) {
    commit("setLoading", true);
    commit("setErrorMsg", ""); // Clear previous error message
    try {
      const response = await fetchData("locationList"); // Use fetchData from apiService
      if (Array.isArray(response)) {
        commit("GET_LOCATION_LIST", response);
      } else {
        console.error("Fetched data is not an array:", response);
        commit("setErrorMsg", "Fetched data is not an array.");
      }
    } catch (error) {
      console.error("Error fetching Location List:", error);
      commit("setErrorMsg", error.message);
    } finally {
      commit("setLoading", false);
    }
  },

  async addLocation({ commit }, location) {
    try {
      const newLocation = await postData("saveLocation", location); // Use postData from apiService
      commit("addLocation", newLocation);
    } catch (error) {
      console.error("Failed to add location:", error);
      commit("setErrorMsg", error.message);
    }
  },

  async deleteLocation({ commit }, locationId) {
    try {
      await postData("deleteLocation", { location_id: locationId }); // Use postData from apiService
      commit("removeLocation", locationId);
    } catch (error) {
      console.error("Failed to delete location:", error);
      commit("setErrorMsg", error.message);
    }
  },
  async logout({ commit }) {
    // Example of using apiMixin's logout method
    apiMixin.methods.logoutAll(); // Assuming logoutAll is a method in apiMixin
    commit("setErrorMsg", "You have been logged out."); // Notify the user
  },
};

const mutations = {
  GET_LOCATION_LIST(state, location_list) {
    state.location_list = location_list;
  },
  addLocation(state, location) {
    state.location_list.push(location);
  },
  removeLocation(state, locationId) {
    state.location_list = state.location_list.filter(
      (location) => location.id !== locationId
    );
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
  setErrorMsg(state, responseMsg) {
    state.responseMsg = responseMsg;
  },
};

const getters = {
  getLocations(state) {
    return state.location_list;
  },
  isloading(state) {
    return state.loading;
  },
  getErrorMsg(state) {
    return state.responseMsg;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
