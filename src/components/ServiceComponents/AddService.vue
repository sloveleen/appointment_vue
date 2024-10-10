<template>
  <DashboardLayout>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow-sm">
            <div class="card-header text-center white-bgcolor">
              <h4>Create Service</h4>
            </div>
            <div class="card-body">
              <form>
                <!-- Name -->
                <div class="mb-3">
                  <label for="serviceName" class="form-label">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="serviceName"
                    placeholder="Enter service name"
                  />
                </div>

                <!-- Description -->
                <div class="mb-3">
                  <label for="serviceDescription" class="form-label"
                    >Description</label
                  >
                  <textarea
                    class="form-control"
                    id="serviceDescription"
                    rows="3"
                    placeholder="Enter description"
                  ></textarea>
                </div>

                <!-- Image Upload -->
                <div class="mb-3">
                  <label class="form-label">Image Upload</label>
                  <div
                    class="border p-3 text-center"
                    style="border-radius: 5px"
                  >
                    <input
                      type="file"
                      id="serviceImage"
                      class="form-control"
                      hidden
                    />
                    <label for="serviceImage" class="btn btn-outline-primary"
                      >Browse file</label
                    >
                    <p class="mt-2">
                      Drag and drop images here, upload, or browse image
                      library.
                    </p>
                  </div>
                </div>

                <!-- Locations and Taxes -->
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label for="serviceLocation" class="form-label"
                      >Locations</label
                    >
                    <select class="form-select" id="serviceLocation">
                      <option selected>All locations</option>
                      <option value="1">Location 1</option>
                      <option value="2">Location 2</option>
                    </select>
                  </div>
                  <div class="col-md-6 mb-3">
                    <label for="serviceTax" class="form-label">Taxes</label>
                    <select class="form-select" id="serviceTax">
                      <option selected>GST</option>
                      <option value="1">VAT</option>
                      <option value="2">Service Tax</option>
                    </select>
                  </div>
                </div>

                <!-- Save Button -->
                <div class="text-end">
                  <button type="submit" class="btn btn-primary">Save</button>
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
import DashboardLayout from "../MainPageLayout/DashboardLayout.vue";
export default {
  name: "App",
  components: {
    DashboardLayout,
  },
};
</script>
