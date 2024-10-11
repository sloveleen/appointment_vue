<template>
  <DashboardLayout>
    <div class="form-container form">
      <header>
        <h2 class="text-center">
          {{ isEditing ? "Edit Location" : "Add Location" }}
        </h2>
      </header>

      <div class="basic-information">
        <h4>Basic Information</h4>

        <p class="basic-info">
          Help customers recognize your transactions with your store’s location,
          nickname, and a brief description of your products or services.
        </p>

        <div class="form-group">
          <label for="location-name">Location business name</label>
          <input type="text" id="location-name" />
          <a href="#" class="info-link">What is this?</a>
        </div>

        <div class="form-group">
          <label for="location-nickname"
            >Location Nickname

            <span class="imp">*</span>
          </label>
          <input
            type="text"
            v-model="newLocation.location_name"
            id="location-nickname"
            placeholder="Location Nickname"
          />
          <p class="small-info">
            Your Location Business Name can be edited up to 3 times every 12
            months. Changing your Location Business Name does not count against
            your Business Name Change allowance. If you need to make a change
            outside of this window, please <a href="#">contact Support</a>.
          </p>
        </div>

        <div class="form-group">
          <label for="business-description">Business description</label>
          <textarea
            id="business-description"
            v-model="newLocation.description"
            rows="3"
          ></textarea>
        </div>
      </div>
      <hr />
      <div class="business-details">
        <h4>Business details</h4>

        <div class="form-group">
          <label for="locationType">Location type</label>
          <select v-model="newLocation.location_type" id="locationType">
            <option value="physical">Physical location</option>
            <option value="virtual">Virtual location</option>
          </select>
        </div>

        <div class="form-group">
          <label for="addressLine1">Address line 1</label>
          <input
            type="text"
            v-model="newLocation.address_line_1"
            id="addressLine1"
            placeholder="251, Church Street"
          />
        </div>

        <div class="form-group">
          <label for="addressLine2">Address line 2</label>
          <input
            type="text"
            v-model="newLocation.address_line_1"
            id="addressLine2"
            placeholder="Address line 2"
          />
        </div>

        <div class="form-group">
          <label for="suburb">Suburb</label>
          <input
            type="text"
            v-model="newLocation.suburb"
            id="suburb"
            placeholder="Parramatta"
          />
        </div>

        <div class="form-group">
          <label for="state">State</label>
          <select v-model="newLocation.state" id="state">
            <option value="nsw">New South Wales</option>
            <!-- Add other states here -->
          </select>
        </div>

        <div class="form-group">
          <label for="postalCode">Postal code</label>
          <input
            type="text"
            v-model="newLocation.postalCode"
            id="postalCode"
            placeholder="2150"
          />
        </div>
      </div>
      <hr />

      <div class="contact-information">
        <h4>Contact Information</h4>

        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="text"
            v-model="newLocation.email"
            id="email"
            placeholder="info@successvisa.com.au"
          />
        </div>

        <div class="form-group">
          <label for="phone">Phone</label>
          <input
            type="text"
            v-model="newLocation.phone"
            id="phone"
            placeholder="0468 791 726"
          />
        </div>

        <h4>Social contact</h4>

        <div class="form-group">
          <label for="website">Website</label>
          <input
            type="text"
            v-model="newLocation.website"
            id="website"
            placeholder="www.successvisa.com.au"
          />
        </div>

        <div class="form-group">
          <label for="socialX">X</label>
          <input
            type="text"
            v-model="newLocation.socialX"
            id="socialX"
            placeholder="X"
          />
        </div>

        <div class="form-group">
          <label for="instagram">Instagram</label>
          <input
            type="text"
            v-model="newLocation.instagram"
            id="instagram"
            placeholder="successvisaau"
          />
        </div>

        <div class="form-group">
          <label for="facebook">Facebook</label>
          <input
            type="text"
            v-model="newLocation.facebook"
            id="facebook"
            placeholder="https://www.facebook.com/successvisaau"
          />
        </div>
      </div>
      <hr />
      <div class="branding-section">
        <h4>Branding</h4>
        <p class="branding-description">
          Your brand information applies to the look and feel of your receipts,
          invoices, location bookings, and marketing.
        </p>

        <!-- Logo Upload Section -->
        <div class="logo-section">
          <h3>Logo</h3>

          <!-- Drop Zone -->
          <div class="upload-box" @dragover.prevent @drop.prevent="handleDrop">
            <div v-if="!logoPreview" class="placeholder">
              <i class="icon-upload"></i>
              <p>
                Drag and drop a logo or <a @click="browseFile">browse file</a>
              </p>
            </div>
            <div v-else class="logo-preview">
              <img :src="logoPreview" alt="Logo Preview" />
            </div>
          </div>

          <!-- Hidden File Input -->
          <input
            type="file"
            ref="fileInput"
            @change="handleFile"
            style="display: none"
          />
        </div>
      </div>
      <hr />

      <div class="business-hours">
        <h4>Business hours</h4>

        <div class="form-group mt-4">
          <label for="timeZone">Time Zone</label>
          <select id="timeZone" v-model="newLocation.address_line_1">
            <option value="Sydney">Sydney</option>
            <option value="New York">New York</option>
            <option value="London">London</option>
            <!-- Add other time zones as needed -->
          </select>
        </div>

        <h4>Regular hours</h4>
        <p class="small-info">Let your clients know when you're open.</p>

        <div
          v-for="(day, index) in days"
          :key="index"
          class="day-hours d-flex align-items-center justify-content-between mt-3"
        >
          <div class="form-group d-flex gap-2">
            <input
              type="checkbox"
              v-model="day.isOpen"
              :id="'day-' + day.name"
            />
            <label :for="'day-' + day.name">{{ day.name }}</label>
          </div>

          <div
            v-if="day.isOpen"
            class="time-inputs flex-column align-items-start justify-content-start w50"
          >
            <div class="d-flex">
              <span class="text-box border rounded p-2 d-flex flex-column">
                <label for="openTime w100">Open time</label>
                <input type="time" class="border-0" v-model="day.openTime" />
              </span>
              <span class="text-box border rounded p-2 d-flex flex-column ml-1">
                <label for="closeTime">Close time</label>
                <input type="time" class="border-0" v-model="day.closeTime" />
              </span>
            </div>
            <div class="d-block">
              <a href="#" class="info-link" @click.prevent="addTime(index)"
                >Add times</a
              >
            </div>
          </div>
        </div>
      </div>
      <hr />
      <input
        type="button"
        :value="isEditing ? 'Edit Location' : 'Add Location'"
        @click="saveForm"
        class="submit-btn"
      />
    </div>
  </DashboardLayout>
</template>
<script>
import DashboardLayout from "../MainPageLayout/DashboardLayout.vue";
import { mapActions, mapState } from "vuex"; // Import mapActions to map Vuex actions
export default {
  name: "AddLocation",
  components: {
    DashboardLayout,
  },
  props: ["id"],
  data() {
    return {
      logoPreview: null,
      isEditing: false,
      days: [
        { name: "Monday", isOpen: false, openTime: "", closeTime: "" },
        { name: "Tuesday", isOpen: false, openTime: "", closeTime: "" },
        { name: "Wednesday", isOpen: false, openTime: "", closeTime: "" },
        { name: "Thursday", isOpen: false, openTime: "", closeTime: "" },
        { name: "Friday", isOpen: false, openTime: "", closeTime: "" },
        { name: "Saturday", isOpen: false, openTime: "", closeTime: "" },
        { name: "Sunday", isOpen: false, openTime: "", closeTime: "" },
      ],
      newLocation: {
        location_name: "",
        location_type: "",
        address_line_1: "",
        address_line_2: "", // Add this
        suburb: "", // Added field to match your form
        state: "",
        postalCode: "", // Change `zip` to `postalCode` to match your form
        email: "",
        phone: "",
        website: "",
        latitude: "",
        longitude: "",
        open_time: "",
        id: "", // To track if it's an edit action
      },
    };
  },
  computed: {
    ...mapState("locations", ["location_list"]), // Assuming staffs are loaded in state

    ...mapState({
      locationData: (state) => state.location_list.newLocation,
    }),
  },
  methods: {
    ...mapActions("locations", [
      "addLocation",
      "updateLocation",
      "findLocation",
    ]), // Include the namespace
    checkEditMode() {
      const locationId = this.$route.query.id;
      if (locationId != "0" && locationId != "" && locationId != undefined) {
        this.isEditing = true;
        const location = this.location_list.find(
          (s) => parseInt(s.location_id) == parseInt(locationId)
        );
        if (location) {
          this.newLocation = { ...location }; // Copy the existing staff details to the form
        }
      }
    },
    handleDrop(e) {
      const file = e.dataTransfer.files[0];
      this.uploadLogo(file);
    },
    browseFile() {
      this.$refs.fileInput.click();
    },
    handleFile(e) {
      const file = e.target.files[0];
      this.uploadLogo(file);
    },
    uploadLogo(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.logoPreview = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    addTime(dayIndex) {
      console.log("Additional times for", this.days[dayIndex].name);
      // Logic to handle adding more open/close times
    },
    async saveForm() {
      try {
        await this.addLocation(this.newLocation);
        alert("Location added successfully!"); // Success message
      } catch (error) {
        console.error("Error adding Plan:", error);
        alert("Failed to add Plan.");
      } finally {
        // this.loading = false;
      }
    },
  },
};
</script>
