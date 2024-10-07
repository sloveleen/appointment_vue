<template>
  <div class="staff-container">
    <!-- Header -->
    <div class="header">
      <h2>Staff</h2>
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
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
      staffList: [
        {
          name: "Amit Kansal",
          email: "successvisasydney@gmail.com",
          phone: "0468 791 726",
          permissions: "Owner",
          services: 8,
        },
        {
          name: "Amit Kansal (T)",
          email: "successvisaau@gmail.com",
          phone: "0468 791 726",
          permissions: "Team Permissions",
          services: 4,
        },
        {
          name: "Krishlyn Krishlyn (T)",
          email: "infosydney@successvisa.com.au",
          phone: "0468 791 726",
          permissions: "Team Permissions",
          services: 2,
        },
        {
          name: "Krishlyn Krishlyn",
          email: "info@successvisa.com.au",
          phone: "0468 791 726",
          permissions: "Team Permissions",
          services: 4,
        },
      ],
    };
  },
  computed: {
    filteredStaff() {
      return this.staffList.filter((staff) =>
        staff.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    getInitials(name) {
      return name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("");
    },
    getBorderStyle(name) {
      // Define colors for each border-left
      const colors = ["#007bff", "#28a745", "#ffc107", "#dc3545"];
      const index = name.length % colors.length;
      return {
        borderLeft: `4px solid ${colors[index]}`,
        paddingLeft: "10px", // Adjust padding to make up for the border
        backgroundColor: "#fff", // Ensure background is white
        color: "#555",
        borderRadius: "50%",
      };
    },
  },
};
</script>

<style scoped>
/* Container Styling */
.staff-container {
  padding: 20px;
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
}

/* Header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

h2 {
  font-size: 1.5rem;
  margin: 0;
}

.search-input {
  padding: 10px;
  font-size: 1rem;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-staff-btn {
  background-color: #0056b3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-staff-btn:hover {
  background-color: #003f88;
}

/* Staff Table */
.table-container {
  background-color: white;
  border-radius: 10px;
  overflow-x: auto;
}

.staff-table {
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
