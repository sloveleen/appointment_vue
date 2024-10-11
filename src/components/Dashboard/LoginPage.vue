<template>
  <!-- <DashboardLayout> -->
  <div class="w100">
    <div class="display-flex overlay-login">
      <div class="col-xl-5 col-lg-6 overlay-form m-auto">
        <form class="w100" @submit.prevent="loginUser">
          <!-- Prevent default form submission -->
          <div class="row mt-5">
            <div v-if="error == 0" class="alert alert-success">
              {{ msg }}
            </div>
            <div v-if="error == 1" class="alert alert-danger">
              {{ msg }}
            </div>
            <h1>Welcome Back! 👋</h1>
            <p>Please login to your account.</p>

            <div class="w100 mb-3 mt-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                v-model="username"
                id="username"
                required
              />
            </div>
            <div class="width100">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="password"
                id="password"
                required
              />
            </div>
            <div class="mt-3">
              <button type="submit" class="login-form-btn" :disabled="loading">
                <span v-if="loading">Loading...</span>
                <!-- Loading text -->
                <span v-else>Login</span>
                <!-- Normal button text -->
              </button>
            </div>
            <button class="btn btn-1 hover-filled-opacity">
              <span>hover me</span>
            </button>
          </div>
        </form>
      </div>
      <div class="overlay-left col-xl-7 col-lg-6">
        <!-- <img
        src="../../assets/images/Login.webp"
        alt="login-img"
        class="object-fit-fill"
        /> -->
      </div>
    </div>
  </div>
  <!-- </DashboardLayout> -->
</template>

<script>
// import DashboardLayout from "../MainPageLayout/DashboardLayout.vue";
import { authorizeUser } from "@/services/apiServices"; // Import the login function

export default {
  name: "LoginPage",
  components: {
    // DashboardLayout,
  },
  data() {
    return {
      loading: false,
      username: "",
      password: "",
      msg: "",
      error: -1, // 0 for no error; 1 for error
    };
  },
  created() {
    localStorage.clear();
  },
  methods: {
    async loginUser() {
      // Reset messages
      console.log("function call");
      this.msg = "";
      this.error = -1;

      // Validate inputs
      if (!this.username || !this.password) {
        this.msg = "Both fields are required.";
        this.error = 1; // Set error state
        return;
      }

      this.loading = true; // Set loading state

      try {
        const credentials = {
          username: this.username,
          password: this.password,
        };
        const response = await authorizeUser(credentials);

        console.log("Response from API:" + response); // Debugging the response

        // const res = response.data;

        // Check if login is successful based on 'error' value being '0'
        if (response.error === "0") {
          console.log("error" + response.error);
          this.msg = response.msg || "Login successful!"; // Show success message
          this.error = 0; // Set success state
          localStorage.setItem("token", response.token); // Store the token
          this.$router.push("/dashboard"); // Redirect to dashboard
        } else {
          this.msg =
            response.msg || "Login failed. Please check your credentials."; // Show error message
          this.error = 1; // Set response.error state
        }
      } catch (error) {
        console.error("response.Error during login:", error); // Log the error for debugging
        this.msg = "An Error Occurred during login."; // Generic error message
        this.error = 1; // Set error state
      } finally {
        this.loading = false; // Reset loading state
      }
    },
  },
};
</script>
<style scoped>
.btn {
  position: relative;
  display: inline-block;
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0px 25px 15px;
  min-width: 150px;
}
.btn span {
  position: relative;
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  transition: 0.3s;
}

/*--- btn-1 ---*/
.btn-1::before {
  background-color: rgb(28, 31, 30);
  transition: 0.3s ease-out;
}
.btn-1 span {
  color: rgb(255, 255, 255);
  border: 1px solid rgb(28, 31, 30);
  transition: 0.2s 0.1s;
}
.btn-1 span:hover {
  color: rgb(28, 31, 30);
  transition: 0.2s 0.1s;
} /* 5. hover-filled-opacity */
.btn.hover-filled-opacity::before {
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
}
.btn.hover-filled-opacity:hover::before {
  opacity: 0;
}
</style>
