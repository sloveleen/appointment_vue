<template>
  <DashboardLayout>
    <div v-if="loading">Loading locations...</div>
    <div class="location-container" v-else>
      <!-- Header -->
      <div
        class="header d-flex justify-content-between align-items-center mb-2"
      >
        <!-- list4: {{ filteredLocation }} -->
        <h2>Location List ({{ filteredLocation.length }})</h2>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by name"
          class="search-input"
        />
        <button class="add-location-btn" @click="addLocation">
          + Add Location
        </button>
        <!-- {{ showInactive }} -->
        <button class="btn" @click="showInactive = !showInactive">
          {{ showInactive ? "Hide active" : "Show Inactive" }}
        </button>
      </div>

      <!-- location Table -->
      <div class="table-container">
        <table class="location-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Pincode</th>
              <th>State</th>
              <th>Email</th>
              <th>Website</th>
              <th>Mobile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="location in filteredLocation" :key="location.email">
              <td class="location-name">
                <div class="location-info">
                  <span class="location-initials"> </span>
                  <span class="location-full-name">{{
                    location.location_name || "NA"
                  }}</span>
                </div>
              </td>
              <td>{{ location.location_type || "NA" }}</td>
              <td>{{ location.pincode || "NA" }}</td>
              <td>{{ location.state || "NA" }}</td>
              <td>{{ location.email || "NA" }}</td>
              <td>{{ location.website || "NA" }}</td>
              <td>{{ location.contact_no || "NA" }}</td>
              <td class="action-icons">
                <span @click="editDetails(location.location_id)">
                  <img src="../../assets/svg/edit-icon.svg" alt="edit-icon" />
                </span>
                <span @click="deleteDetails(location.location_id)">
                  <img
                    src="../../assets/svg/delete-icon.svg"
                    alt="delete-icon"
                  />
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "../MainPageLayout/DashboardLayout.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: { DashboardLayout },
  data() {
    return {
      loading: true,
      searchQuery: "",
      showInactive: false,
    };
  },
  computed: {
    ...mapState("locations", {
      locationList: (state) =>
        Array.isArray(state.location_list) ? state.location_list : [], // Ensure it's an array
    }),
    filteredLocation() {
      const query = this.searchQuery.toLowerCase();
      let locations = this.locationList.filter((location) =>
        Object.values(location).some((value) =>
          value.toString().toLowerCase().includes(query)
        )
      );

      if (!this.showInactive) {
        locations = locations.filter(
          (location) => location.status !== "inactive"
        );
      }

      return locations;
    },
  },
  created() {
    this.loadLocationList();
  },
  methods: {
    ...mapActions("locations", ["locationsList"]),
    async loadLocationList() {
      // alert(" Location List load");
      this.loading = true;
      try {
        await this.$store.dispatch("locations/locationsList");
        console.log("load Location list" + this.loadLocationList);
      } finally {
        this.loading = false;
      }
    },

    async editDetails(sid) {
      alert(sid);
      this.$router.push(`/AddLocation?id=${sid}`);
    },
    async deleteDetails(id) {
      if (confirm("Are you sure you want to delete this member?")) {
        try {
          await this.$store.dispatch("locations/deleteLocation", id);
          alert("Location deleted successfully.");
          // Reload the location list after deletion
          await this.loadLocationList();
        } catch (error) {
          console.error("Failed to delete member:", error);
          alert("Error deleting member.");
        }
      } else {
        alert("Cancelled");
      }
    },
    async addLocation() {
      this.$router.push("/AddLocation?id=0"); // Pass a default id or set it up as needed
    },
  },
};
</script>

<style scoped>
/* Container Styling */
.location-container {
  padding: 20px;
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
}

.search-input {
  padding: 10px;
  font-size: 1rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 7px;
}

.add-location-btn {
  background-color: #0056b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-location-btn:hover {
  background-color: #003f88;
}

table {
  overflow-x: auto;
  width: 100%;
  background-color: white;
  border-collapse: collapse;

  th,
  td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid #e0e0e0;
  }
}
</style>
