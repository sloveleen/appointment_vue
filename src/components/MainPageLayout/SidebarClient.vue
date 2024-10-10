<template>
  <div class="text-center">
    <img
      src="../../assets/images/life-insurance.png"
      alt="BBA"
      class="main-logo w30"
    />
  </div>

  <nav class="side-links overflow-y-scroll">
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center w100"
    >
      <span class="w20">
        <img
          src="../../assets/svg/dashboard.svg"
          alt="dashboard"
          class="w100"
        />
      </span>
      <span class="w80">
        <router-link class="nav-link" to="/">Dashboard</router-link>
      </span>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center w100"
    >
      <span class="w20">
        <img src="../../assets/svg/location.svg" alt="location" class="w100" />
      </span>
      <span class="w80">
        <router-link class="nav-link" to="/AddLocation"
          >Add Location</router-link
        >
      </span>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <span class="w20">
        <img
          src="../../assets/svg/list-icon.svg"
          alt="location-list"
          class="w100"
      /></span>
      <span class="w80">
        <router-link class="nav-link" to="/LocationList"
          >Location List</router-link
        ></span
      >
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <span class="w20">
        <img src="../../assets/svg/service.svg" alt="service" class="w100" />
      </span>

      <span class="w80">
        <router-link class="nav-link" to="/AddService">Add Service</router-link>
      </span>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <span class="w20">
        <img
          src="../../assets/svg/list-icon.svg"
          alt="service-list"
          class="w100"
        />
      </span>
      <span class="w80">
        <router-link class="nav-link" to="/ServiceList"
          >Service List</router-link
        >
      </span>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <span class="w20">
        <img
          src="../../assets/svg/list-icon.svg"
          alt="service-list"
          class="w100"
        />
      </span>
      <span class="w80 text-left">
        <router-link class="nav-link" to="/">Calendar</router-link>
      </span>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <span class="w20"></span>
      <span class="w80">
        <router-link class="nav-link" to="/">Waitlist</router-link>
      </span>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <router-link class="nav-link" to="/">Online Booking</router-link>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <router-link class="nav-link" to="/">Library</router-link>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <router-link class="nav-link" to="/">Staff</router-link>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <router-link class="nav-link" to="/">Settings</router-link>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <router-link class="nav-link" to="/">What's New</router-link>
    </li>
    <hr />
    <li
      class="nav-item d-flex flex-wrap justify-content-around mt-2 text-center"
    >
      <router-link class="nav-link" to="/">Quick Find</router-link>
    </li>
    <hr />
  </nav>
</template>

<script>
export default {
  name: "SidebarClient",
  data() {
    return {
      role: "",
      id: "",
    };
  },
};
</script>
<style scoped>
.side-links {
  height: 100vh;
  margin: 2rem auto;
}
</style>
