<template>
  <div class="position-sticky">
    <div class="text-center">
      <img
        src="../../assets/images/life-insurance.png"
        alt="BBA"
        class="main-logo w30"
      />
    </div>

    <ul class="side-links mt-3">
      <li class="nav-item">
        <router-link class="nav-link active" to="/">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Calendar</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Waitlist</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Online Booking</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Library</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Staff</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Settings</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">What's New</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Quick Find</router-link>
      </li>
      <li><router-link class="nav-link" to="/">Dashboard</router-link></li>
      <li>
        <router-link class="nav-link" to="/AddLocation"
          >Add Location</router-link
        >
      </li>
      <li>
        <router-link class="nav-link" to="/LocationList"
          >Location List</router-link
        >
      </li>
    </ul>
  </div>
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
