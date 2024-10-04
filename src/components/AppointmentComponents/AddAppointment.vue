<template>
  <div class="form-container form">
    <h2>Location Details</h2>

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
      <label for="location-nickname">Location nickname</label>
      <input
        type="text"
        id="location-nickname"
        placeholder="Location nickname"
      />
      <p class="small-info">
        Your Location Business Name can be edited up to 3 times every 12 months.
        Changing your Location Business Name does not count against your
        Business Name Change allowance. If you need to make a change outside of
        this window, please <a href="#">contact Support</a>.
      </p>
    </div>

    <div class="form-group">
      <label for="business-description">Business description</label>
      <textarea id="business-description" rows="3"></textarea>
    </div>

    <button class="submit-btn">Save</button>
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>
