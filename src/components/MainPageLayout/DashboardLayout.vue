<template>
  <div class="container-fluid">
    <div class="row">
      <!-- Sidebar -->
      <nav class="col-md-4 col-lg-2 d-md-block sidebar p-3">
        <SidebarClient></SidebarClient>
      </nav>
      <!-- Sidebar End-->

      <!-- Main content -->
      <main class="col-md-9 ms-sm-auto col-lg-10 bg-light padding_none">
        <TopHeader></TopHeader>
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
import SidebarClient from "./SidebarClient.vue";
import TopHeader from "./TopHeader.vue";
export default {
  name: "DashboardLayout",
  components: {
    SidebarClient,
    TopHeader,
  },
};
</script>
