<template>
  <div class="w90 bg-white p-3">
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
          <li class="nav-item dropdown d-flex gap-2 align-items-center">
            <span>
              <img src="../../assets/svg/search-icon.svg" alt="search_icon" />
            </span>
            <span>
              <img src="../../assets/svg/noti-bell.svg" alt="notification" />
            </span>
            <span>
              <img src="../../assets/svg/list.svg" alt="list" />
            </span>
            <router-link
              class="dropdown-toggle btn-profile action-btn"
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
                Loveleen
                <!-- {{ apis.name }} -->
              </span>
              12
              <!-- ({{ apis.id }}) -->
            </router-link>
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
