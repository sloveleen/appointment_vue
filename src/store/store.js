// src/store/store.js
import { createStore } from "vuex"; // Importing Vuex's createStore function
// Importing the different modules for the store
import services from "./modules/services";

// Creating the Vuex store and registering the modules
const store = createStore({
  modules: {
    services, // Manages services-related state
  },
});

export default store; // Exporting the store to use in the Vue app
