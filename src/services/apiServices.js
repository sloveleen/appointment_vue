// services/apiService.js
import axios from "axios";
import { logoutAll } from "@/store/apiMixin";

// Create an Axios instance with base configuration
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Base URL for your API
  headers: {
    "Content-Type": "application/json", // Set default content type
  },
});
const fixedToken =
  "Bearer 67fd68248ad33d89c4e6f504fd9143e1d6b982d1b487734f299f51fbc490c135"; // Optional fallback token

// Interceptor to add the Authorization token to each request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token") || fixedToken; // Use localStorage token or fixed token
    config.headers.Authorization = token; // Add token to headers
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Centralized error handling function
const handleError = async (error) => {
  if (error.response && error.response.data.error === "2") {
    // Assuming 2 is the error code for session expiration
    alert("Session Expired. Attempting to refresh token.");

    // Optionally: Attempt to refresh the token here
    const refreshToken = localStorage.getItem("refresh_token");
    if (refreshToken) {
      try {
        const response = await apiClient.post("/auth/refresh", {
          token: refreshToken,
        });
        localStorage.setItem("token", response.data.token); // Store new token
        return; // Exit, allowing retry logic if needed
      } catch (refreshError) {
        console.error("Refresh token failed", refreshError);
      }
    }

    alert("Session Expired. Please login again.");
    logoutAll(); // Handle session expiration by logging out
  } else {
    console.error(
      "API Error:",
      error.response ? error.response.data : error.message
    );
  }
  throw error;
};

// Function to fetch data (GET request)
export const fetchData = (url, params = {}) => {
  // const token = localStorage.getItem("token"); // Retrieve token from local storage
  return (
    apiClient
      .get(url, { params }) // No need to set headers here, it's handled by the interceptor

      // .get(url, {
      //   headers: { Authorization: `Bearer ${token}` }, // Add Authorization header
      //   params, // Include any query parameters
      // })

      .then((response) => response.data) // Return the data from the response
      .catch((error) => {
        console.error("Error occurred during post:", error); // Log the error
        handleError(error); // Handle errors
      })
  );
};

// Function to post data (POST request)
export const postData = (url, data) => {
  // const token = localStorage.getItem("token"); // Retrieve token from local storage
  console.log(`Attempting to post data to ${url} with data:`, data); // Log before the request
  return (
    apiClient
      // .post(url, data, {
      //   headers: { Authorization: `Bearer ${token}` }, // Add Authorization header
      // })
      .post(url, data)
      .then((response) => {
        // Return the data from the response
        console.log("Received response:", response.data); // Log after successful response
        return response.data;
      })
      .catch((error) => {
        console.error("Error occurred during post:", error); // Log the error
        handleError(error); // Handle errors
      })
  );
};

export const deleteData = (url, data) => {
  // const token = localStorage.getItem("token");
  return apiClient
    .delete(url, {
      data, // Send the data as the request body
    })
    .then((response) => response.data)
    .catch((error) => {
      handleError(error);
      console.log("response" + handleError);
    });
};

// Function to log in
export const authorizeUser = (credentials) => {
  return fetchData("validateUser", credentials) // Pass credentials as query params for GET request
    .then((data) => {
      // Handle successful login, e.g., store the token
      if (data.token) {
        localStorage.setItem("token", data.token); // Store token in localStorage
        return data; // Return the login response data
      }
      throw new Error("Login failed, no token returned.");
    })
    .catch((error) => {
      console.error("Error during login:", error);
      throw error; // Rethrow error for handling elsewhere if needed
    });
};
