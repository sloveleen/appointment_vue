import axios from "axios";
import { logoutAll } from "@/utils/auth"; // Importing from the new utility
// Create an Axios instance with base configuration
const apiClient = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Base URL for your API
  headers: {
    "Content-Type": "application/json", // Set default content type
  },
});

// Centralized error handling function
const handleError = async (error) => {
  if (error.response && error.response.data.error === "2") {
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
  const token = localStorage.getItem("token"); // Retrieve token from local storage
  return apiClient
    .get(url, {
      headers: { Authorization: `Bearer ${token}` }, // Add Authorization header
      params, // Include any query parameters
    })
    .then((response) => response.data) // Return the data from the response
    .catch(handleError); // Handle errors
};

// Function to post data (POST request)
export const postData = (url, data) => {
  const token = localStorage.getItem("token"); // Retrieve token from local storage
  return apiClient
    .post(url, data, {
      headers: { Authorization: `Bearer ${token}` }, // Add Authorization header
    })
    .then((response) => response.data) // Return the data from the response
    .catch(handleError); // Handle errors
};

// Function to delete data (DELETE request)
export const deleteData = (url, data) => {
  const token = localStorage.getItem("token"); // Retrieve token from local storage
  return apiClient
    .delete(url, {
      headers: { Authorization: `Bearer ${token}` },
      data, // Send the data as the request body
    })
    .then((response) => response.data) // Return the data from the response
    .catch(handleError); // Handle errors
};
