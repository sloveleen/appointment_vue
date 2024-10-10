<template>
  <DashboardLayout>
    <div class="staff-container">
      <!-- Header -->
      <div class="header">
        <h2>Service</h2>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search by name"
          class="search-input"
        />
        <button class="add-staff-btn">+ Add staff</button>
      </div>

      <!-- Staff Table -->
      <div class="table-container">
        <table class="staff-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Work email</th>
              <th>Work phone</th>
              <th>Permissions</th>
              <th>Online booking</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="staff in filteredStaff" :key="staff.email">
              <td class="staff-name">
                <div class="staff-info">
                  <span
                    class="staff-initials"
                    :style="getBorderStyle(staff.name)"
                  >
                    {{ getInitials(staff.name) }}
                  </span>
                  <span class="staff-full-name">{{ staff.name }}</span>
                </div>
              </td>
              <td>{{ staff.email }}</td>
              <td>{{ staff.phone }}</td>
              <td>{{ staff.permissions }}</td>
              <td>
                <button class="services-btn">
                  {{ staff.services }} services bookable
                </button>
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
import { apiMixin } from "@/store/apiMixin"; // Adjust the path accordingly
import { mapActions, mapState } from "vuex";
export default {
  components: { DashboardLayout },
  mixins: [apiMixin],
  computed: {
    ...mapState(["someStateProperty"]), // Accessing Vuex state
  },
  methods: {
    ...mapActions(["someAction"]), // Mapping Vuex actions
    async loadData() {
      const data = await this.fetchDataMixin("/serviceList");
      this.someAction(data); // Dispatching Vuex action with fetched data
    },
  },
  created() {
    this.loadData(); // Load data on component creation
  },
};
</script>

<style scoped>
.table-container {
  background-color: white;
  border-radius: 10px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
}

.staff-table th,
.staff-table td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}

.staff-name {
  display: flex;
  align-items: center;
}

/* Staff Information */
.staff-info {
  display: flex;
  align-items: center;
}

.staff-initials {
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  margin-right: 10px;
  border-left-width: 5px;
  border-left-style: solid;
}

.staff-full-name {
  font-weight: 600;
}

/* Online Booking Button */
.services-btn {
  background-color: #f2f2f2;
  border: none;
  padding: 7px 15px;
  border-radius: 20px;
  color: #555;
  font-size: 0.9rem;
  cursor: pointer;
}

.services-btn:hover {
  background-color: #e6e6e6;
}
</style>
