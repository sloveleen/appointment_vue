// apiMixin
import axios from "axios";
// import { useRouter } from "vue-router";

export const apiMixin = {
  methods: {
    async fetchData(url, paramValue = {}) {
      console.log("Fetching data with parameters:", paramValue);
      const tokenValue = localStorage.getItem("token");

      try {
        const headers = {
          Authorization: `Bearer ${tokenValue}`,
          "Content-Type": "application/json",
        };

        const response = await axios.get(url, { headers, params: paramValue });

        // If session expired
        if (response.data.error === "2") {
          alert(response.data.msg); // Alert the session expiration message
          this.logoutAll(); // Trigger logout
        }

        console.log("Fetched data:", response.data);
        return response.data;
      } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
      }
    },

    async postData(url, data) {
      const tokenValue = localStorage.getItem("token");

      try {
        const headers = {
          Authorization: `Bearer ${tokenValue}`,
          "Content-Type": "application/json",
        };

        const response = await axios.post(url, data, { headers });

        // If session expired
        if (response.data.error === "2") {
          alert(response.data.msg); // Alert the session expiration message
          this.logoutAll(); // Trigger logout
        }

        return response.data;
      } catch (error) {
        console.error("API Post Error:", error);
        throw error;
      }
    },

    logoutAll(router) {
      // Clear local storage and remove token
      localStorage.clear();
      delete axios.defaults.headers.common["Authorization"];
      router.push("/"); // Redirect to login page
    },
  },
};
