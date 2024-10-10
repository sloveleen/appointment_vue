import { fetchData, postData } from "@/services/apiServices"; // Adjust the path accordingly
import { useRouter } from "vue-router";

export const apiMixin = {
  methods: {
    async fetchDataMixin(url, paramValue = {}) {
      console.log("Fetching data with parameters:", paramValue);
      try {
        const data = await fetchData(url, paramValue);
        console.log("Fetched data:", data);
        return data;
      } catch (error) {
        console.error("API Fetch Error:", error);
        throw error;
      }
    },

    async postDataMixin(url, data) {
      try {
        const responseData = await postData(url, data);
        return responseData;
      } catch (error) {
        console.error("API Post Error:", error);
        throw error;
      }
    },

    logoutAll() {
      // Clear local storage and redirect to the login page
      localStorage.clear();
      const router = useRouter();
      router.push("/login"); // Redirect to login page
    },
  },
};
