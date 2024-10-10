<template>
  <div class="width100">
    <div class="display-flex overlay-login">
      <div class="col-xl-5 col-lg-6 overlay-form">
        <form class="w100">
          <div class="row">
            <div v-if="err == 0" class="has-error alert alert-success">
              {{ msg }}
            </div>
            <div v-if="err == 1" class="has-error alert alert-danger">
              {{ msg }}
            </div>
            <h1>Welcome Back! 👋</h1>
            <p>Please login to your account.</p>

            <div class="w100 mb-3 mt-3">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                v-model="user"
                id="username"
              />
            </div>
            <div class="width100">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                v-model="pass"
                id="password"
              />
            </div>
            <div class="mt-3">
              <input
                type="button"
                v-if="loading == false"
                value="Login"
                class="login-form-btn"
                @click="validateUser"
              />
            </div>
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
</template>

<script>
import axios from "axios";
import ApiList from "@/ApiList";
export default {
  name: "LoginPage",
  data() {
    return {
      loading: false,
      user: "",
      pass: "",
      msg: "",
      err: -1, // 0 from no error; 1 for error
    };
  },
  mixins: [ApiList],
  created() {
    localStorage.clear();
  },
  mounted() {
    // console.log("i m mounted login")
  },
  methods: {
    async validateUser(e) {
      // alert(this.apis)
      var user = this.user;
      var pass = this.pass;
      this.loading = true;
      // alert(user+"  "+pass)
      if (user != "" && pass != "") {
        // const url = this.apis.baseUrl + "validateUser";
        const url = "http://127.0.0.1:8000/api/";
        // const url = this.apis.apiUrl + this.apis.loginApi;
        var tokenVal = this.apis.fixedToken;
        // alert(this.selecetdCategory)
        await axios
          .get(url, {
            params: {
              username: user,
              password: pass,
            },
            headers: {
              Authorization: `${tokenVal}`,
            },
          }) //Product/listCategories?token="+localStorage.token)
          .then((response) => {
            console.log(response);
            var res = response.data;
            // alert(res.data);
            console.log(res.data);
            if (res.error == "0") {
              this.loading = false;
              localStorage.setItem("token", res.token);
              localStorage.setItem("id", res.data.id);
              // localStorage.setItem("member_id", res.data.member_id);
              localStorage.setItem("name", res.data.name);
              // localStorage.setItem("mobile", res.data.mobile_no);
              localStorage.setItem("designation", res.data.designation);
              // localStorage.setItem("password", res.data.password);
              // alert("hi")
              this.err = 0;
              if (res.data.designation == "admin") {
                // alert("admin panel");
                this.$router.push("/admin-dashboard");
              } else {
                // alert("member panel");
                this.$router.push("/member-dashboard");
              }
            } else {
              this.err = 1;
              this.loading = false;
              this.msg = "Invalid Username or Password !";
              e.preventDefault();
            }
          });
        // return flag;
      }
    },
  },
};
</script>
