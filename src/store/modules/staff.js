// src/store/modules/staff_List.js
import { fetchData, postData } from "@/services/apiService";
import { logoutAll } from "@/store/apiMixin";
const state = () => ({
  staff_List: [],
  staff: null,
  id: "", // Currently selected member ID
  loading: false,
  newStaff: {
    id: "", // To track if it's an edit action
    name: "",
    father_name: "",
    address: "",
    mobile_no: "",
    designation: "",
    dob: "",
    joining_date: "",
  },
});

const actions = {
  async loadStaffList({ commit }) {
    commit("setLoading", true);
    try {
      const response = await fetchData("/staffList");
      commit("setStaffList", response.data);
      if (response.error === "2") {
        alert(response.msg); // Display the session expiration message
        await logoutAll();
        // dispatch("logoutAll"); // Trigger logout to clear the session and redirect
        return;
      }
      if (Array.isArray(response)) {
        commit("SET_STAFF", response);
      } else {
        console.error("Fetched data is not an array:", response);
      }
    } catch (error) {
      console.error("Error fetching Staff List:", error);
    } finally {
      commit("setLoading", false);
    }
  },

  async addStaff({ commit }, staff) {
    try {
      const newStaff = await postData("/saveStaff", staff);
      commit("addStaff", newStaff);
    } catch (error) {
      console.error("Failed to add staff:", error);
    }
  },

  async updateStaff({ commit }, staff) {
    try {
      const updatedStaff = await postData(`/updateStaff`, staff);

      if (!updatedStaff) {
        throw new Error("Staff not found");
      }

      commit("UPDATE_STAFF", updatedStaff);
    } catch (error) {
      console.error("Failed to update staff:", error);
    }
  },

  async findStaffs({ state }, memberid) {
    state.id = memberid;
    let param = { member_id: memberid };

    try {
      const response = await fetchData("findStaff", param);

      if (response && Array.isArray(response) && response.length > 0) {
        state.newStaff = { ...response[0] }; // Assuming response is an array with one object

        // commit('SET_SINGLE_STAFF', response[0]);
      } else {
        console.error("No valid staff data received:", response);

        state.newStaff = { ...response[0] }; // Assuming response is an array with one object
      }
    } catch (error) {
      console.error("Error fetching member:", error);
    }
  },

  async deleteStaff({ commit }, memberId) {
    try {
      await postData("deleteStaff", { id: memberId });
      commit("DELETE_STAFF", memberId);
    } catch (error) {
      console.error("Failed to delete staff:", error);
    }
  },
};

const mutations = {
  SET_STAFF(state, staff_List) {
    state.staff_List = staff_List;
  },
  addStaff(state, staff) {
    state.staff_List.push(staff);
  },
  UPDATE_STAFF(state, staff) {
    const index = state.staff_List.findIndex(
      (m) => m.member_id === staff.member_id
    );

    if (index !== -1) {
      state.staff_List.splice(index, 1, staff);
    }
  },
  DELETE_STAFF(state, memberId) {
    state.staff_List = state.staff_List.filter((m) => m.member_id !== memberId);
  },
  setLoading(state, loading) {
    state.loading = loading;
  },
};

const getters = {
  getStaffs(state) {
    return state.staff_List;
  },
  isloading(state) {
    return state.loading;
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
