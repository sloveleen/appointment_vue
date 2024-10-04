<template></template>

<script>
export default {
  data() {
    return {
      locationType: "physical",
      addressLine1: "",
      addressLine2: "",
      suburb: "",
      state: "nsw",
      postalCode: "",
    };
  },
  methods: {
    saveForm() {
      // Save form data logic
      console.log("Form submitted", {
        locationType: this.locationType,
        addressLine1: this.addressLine1,
        addressLine2: this.addressLine2,
        suburb: this.suburb,
        state: this.state,
        postalCode: this.postalCode,
      });
    },
    closeForm() {
      // Close form logic
      console.log("Form closed");
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #ffffff;
  font-family: sans-serif;
}

.form-container {
  background-color: #fff;
  width: 60%;
  height: 90vh;
  overflow-y: scroll;
  margin: auto;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.5rem;
  font-family: poppins, sans-serif;
  color: #333;
}

.form-group {
  margin-top: 10px;
  margin-bottom: 20px;
}

label {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 5px;
  color: #333;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 10px;
  font-size: 0.9rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.submit-btn {
  background-color: #0056b3;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  width: 20%;
  cursor: pointer;
  margin: 20px auto;
  display: block;
  text-align: center;
}

.submit-btn:hover {
  background-color: #003d80;
}
.close-btn {
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
