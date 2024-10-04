<template>
  <div class="position-sticky">
    <div class="text-center">
      <img
        src="../../assets/images/life-insurance.png"
        alt="BBA"
        class="logo"
      />
    </div>
    <div class="text-left">
      <h1 class="h3 text-success">Insurance Portal</h1>
    </div>
    <ul class="side-links">
      <li><router-link to="/AddAppointment">Add Appointment</router-link></li>
      <li><router-link to="/OtherComponent">Other Component</router-link></li>
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
