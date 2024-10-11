<template>
  <DashboardLayout>
    <div class="w-container mt-3">
      <div class="mt-4">
        <div class="table-sort">
          <!-- Success Message -->
          <div v-if="successMsg" class="alert alert-success">
            {{ successMsg }}
          </div>
          <!-- Error Message -->
          <div v-if="errorMsg" class="alert alert-danger">{{ errorMsg }}</div>
          <div class="row">
            <div class="w100">
              <!-- Staff Data - {{ staffData }} -->
              <div class="head-section border-bottom pb-3">
                <h3 class="h4">
                  {{ isEditing ? "Edit Staff" : "Add Staff" }} {{ newStaff.id }}
                </h3>
                <router-link to="/staff-list">Staff List </router-link>
              </div>
              <form class="form-style-1">
                <div class="row">
                  <div class="form-input-wrap">
                    <label for="name" class="form-label"
                      >Name<span>*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="name"
                      name="name"
                      v-model="newStaff.name"
                      required=""
                    />
                  </div>
                  <div class="form-input-wrap">
                    <label for="fathers_name" class="form-label"
                      >Father's Name <span>*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      v-model="newStaff.father_name"
                      id="fathers_name"
                      name="fathers_name"
                      required=""
                    />
                  </div>
                  <div class="form-input-wrap">
                    <label for="date" class="form-label"
                      >D.O.B <span>*</span></label
                    >
                    <input
                      type="date"
                      class="form-control"
                      id="date"
                      v-model="newStaff.dob"
                      name="date"
                      required=""
                    />
                  </div>

                  <div class="form-input-wrap">
                    <label for="mobileNo" class="form-label">
                      Mobile no. <span>*</span></label
                    >
                    <input
                      type="text"
                      class="form-control"
                      id="mobile_no"
                      v-model="newStaff.mobile_no"
                      name="mobile_no"
                      required=""
                    />
                  </div>

                  <div class="form-input-wrap">
                    <label for="designation" class="form-label"
                      >Designation <span>*</span></label
                    >
                    <select
                      class="form-control"
                      name="designation"
                      id="designation"
                      v-model="newStaff.designation"
                    >
                      <option value="">{{ selectDesignation }}</option>
                      <option value="admin">Admin</option>
                      <option value="staff">Staff</option>
                      <option value="member">Member</option>
                    </select>
                  </div>

                  <div class="form-input-wrap">
                    <label for="joining_date" class="form-label"
                      >Joining Date <span>*</span></label
                    >
                    <input
                      type="date"
                      class="form-control"
                      v-model="newStaff.joining_date"
                      id="joining_date"
                      name="joining_date"
                      required=""
                    />
                  </div>
                  <div class="w100">
                    <label for="mobileNo" class="form-label"
                      >Address <span>*</span></label
                    >
                    <textarea
                      class="form-control"
                      v-model="newStaff.address"
                    ></textarea>
                  </div>

                  <div class="mt-3">
                    <input
                      type="button"
                      :value="isEditing ? 'Update Staff' : 'Save Staff'"
                      class="p-btn"
                      @click="handleSubmit"
                    />
                    <input
                      type="reset"
                      value="Cancel"
                      class="s-btn ms-3"
                      @click="resetForm"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DashboardLayout from "../MainPageLayout/DashboardLayout.vue";

export default {
  name: "AddStaff",
  components: { DashboardLayout },
  props: ["id"],

  data() {
    return {
      selectDesignation: "--Select Designation--",
      isSaving: false,
      isEditing: false,
      newStaff: {
        id: "", // To track if it's an edit action
        name: "",
        father_name: "",
        address: "",
        mobile_no: "",
        designation: "",
        dob: "",
        joining_date: "",
      },
      successMsg: "",
      errorMsg: "",
    };
  },
  computed: {
    ...mapState("staff", ["staff_List"]), // Assuming staff_List are loaded in state

    ...mapState({
      staffData: (state) => state.staff_List.newStaff,
    }),
  },
  mounted() {
    this.checkEditMode();
    // this.findStaffData();
  },

  methods: {
    ...mapActions("staff_List", [
      "addStaff",
      "updateStaff",
      "findStaffs",
      "editStaff",
    ]),

    checkEditMode() {
      const staffId = this.$route.params.id;
      // alert(staffId);
      if (staffId != "0" && staffId != "") {
        this.isEditing = true;
        // alert(this.staff_List.length);
        const staff = this.staff_List.find(
          (s) => parseInt(s.id) == parseInt(staffId)
        );
        // alert(JSON.stringify(staff));
        if (staff) {
          // alert("staff found!");
          this.newStaff = { ...staff }; // Copy the existing staff details to the form
        }
      }
    },
    async findStaffData() {
      try {
        await this.findStaffs(this.id);
        this.newStaff = { ...this.staffData }; // Sync local data with Vuex //state

        // alert(JSON.stringify(this.memberData));
      } catch (error) {
        console.error("Failed to load member details:", error);
      }
    },
    async handleSubmit() {
      this.successMsg = "";
      this.errorMsg = "";
      this.isSaving = true;
      try {
        if (this.isEditing) {
          await this.$store.dispatch("staff_List/updateStaff", this.newStaff);
          this.successMsg = "Staff updated successfully!";
        } else {
          await this.addStaff(this.newStaff);
          this.successMsg = "Staff added successfully!";
        }
        this.resetForm();
        this.$router.push("/staff-list");
      } catch (error) {
        this.errorMsg = error.response?.data?.msg || "Failed to save staff.";
      } finally {
        this.isSaving = false;
      }
    },

    resetForm() {
      this.isEditing = false;
      this.newStaff = {
        id: "",
        name: "",
        father_name: "",
        address: "",
        mobile_no: "",
        designation: "",
        dob: "",
        joining_date: "",
      };
    },
  },
};
</script>
