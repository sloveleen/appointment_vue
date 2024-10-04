<template>
  <div class="w90 bg-white px-4 py-3">
    <div class="d-flex align-items-center">
      <div class="lf-t-header d-flex align-items-center">
        <span class="badge bg-light text-dark"
          ><span class="material-icons"> reorder </span></span
        >
        &nbsp;&nbsp;
        <router-link
          to="/send-new-quotation"
          class="badge rounded-pill bba-bg-primary p-2"
          >Add New Lead</router-link
        >
      </div>
      <!-- login: {{ apis.loginApi }} -->
      <div class="right-header">
        <ul class="rt-links">
          <li class="nav-item dropdown">
            <a
              class="dropdown-toggle btn-profile text-link"
              id="navbarScrollingDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <div class="profile">
                <span>
                  <!-- {{ apis.name && apis.name.substring(0, 1) }} -->
                </span>
              </div>
              <span style="text-transform: capitalize">
                <!-- {{ apis.name }} -->
              </span>
              <!-- ({{ apis.id }}) -->
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li>
                <router-link class="dropdown-item" to="#"
                  >My Account</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="change-password"
                  >Change Password</router-link
                >
              </li>
              <li><hr class="dropdown-divider" /></li>
              <li>
                <button class="dropdown-item" href="#" @click="logout">
                  Log Out
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {
      // userName: "",
      // user_id: "",
    };
  },
};
</script>
