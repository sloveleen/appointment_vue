<template>
  <DashboardLayout>
    <div class="container-fluid">
      <div class="row sidebar">
        <main
          class="col-md-9 ms-sm-auto col-lg-8 px-md-4 bx-shadow white-bgColor m-2 rounded"
        >
          <div
            class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
          >
            <h2>Upcoming Appointments</h2>
            <div class="text-muted">Time Zone: IST</div>
          </div>

          <!-- Location -->
          <div class="mb-3">
            <span class="fw-bold">Location:</span>
            <span class="badge bg-secondary">SV Toongabbie</span>
          </div>

          <!-- Appointments List -->
          <div class="card mb-4">
            <div class="card-header white-bgColor">Tomorrow</div>
            <ul class="list-group list-group-flush">
              <li
                v-for="appointment in appointments"
                :key="appointment.id"
                class="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{{ appointment.time }}</strong
                  ><br />
                  <span
                    >{{ appointment.client }} with {{ appointment.agent }}</span
                  ><br />
                  <small class="text-muted">{{ appointment.service }}</small>
                </div>
              </li>
            </ul>
          </div>

          <!-- Notifications -->
        </main>
        <div class="card w30 mt-2">
          <div class="card-header white-bgColor">Notifications</div>
          <div class="card-body">
            <div v-if="notifications.length">
              <ul class="list-group list-group-flush">
                <li
                  v-for="notification in notifications"
                  :key="notification.id"
                  class="list-group-item"
                >
                  {{ notification.message }} <br />
                  <small class="text-muted">{{ notification.time }}</small>
                </li>
              </ul>
            </div>
            <div v-else>
              <p class="text-muted">No more notifications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="action-btn" role="button">Button 6</button>
  </DashboardLayout>
</template>

<script>
import DashboardLayout from "./MainPageLayout/DashboardLayout.vue";

export default {
  components: {
    DashboardLayout,
  },
  data() {
    return {
      appointments: [
        {
          id: 1,
          time: "4:30 am - 5:00 am",
          client: "Prakash Bhattarai",
          agent: "Amit Kansal",
          service: "Migration Agent Appointments",
          highlight: true,
        },
        {
          id: 2,
          time: "9:30 am - 10:00 am",
          client: "Khandaker Nazneen",
          agent: "Amit Kansal",
          service: "Migration Agent Appointments",
          highlight: false,
        },
        {
          id: 3,
          time: "10:30 am - 11:00 am",
          client: "Vinita Mani",
          agent: "Amit Kansal",
          service: "Migration Agent Appointments",
          highlight: false,
        },
      ],
      notifications: [
        {
          id: 1,
          message:
            "Mohit Kumar has cancelled an appointment on Tues, 3 Sept at 5:00 PM AEST.",
          time: "11 days ago",
        },
      ],
    };
  },
};
</script>

<style scoped>
#sidebar {
  height: 98vh;
  border-right: 1px solid #dee2e6;
}

.card {
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

/* CSS */
</style>
