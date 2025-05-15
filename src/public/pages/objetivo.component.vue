<template>
  <div class="container">
    <div class="card">
      <h2>What brings you to Youper?</h2>
      <p>We customize recommendations based on your goals</p>

      <div class="button-group">
        <pv-button label="Reduce anxiety" class="custom-btn" />
        <pv-button label="Reduce stress" class="custom-btn" />
        <pv-button label="Develop self-esteem" class="custom-btn" />
        <pv-button label="Increase happiness" class="custom-btn" />
        <pv-button label="Sleep better" class="custom-btn" />
      </div>

      <pv-button label="Continue" class="custom-btn continue-btn" @click="handleContinue" />
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "Objectivo",
  methods: {
    handleContinue() {
      router.push('/test');
    }
  }
}
</script>

<style scoped>
.container {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f7f7fb;
  padding: 1rem;
}

.card {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 1px solid #d1d5db;
  max-width: 500px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h2 {
  font-size: 1.7rem;
  font-weight: bold;
  color: #111827;
  margin-bottom: 0.25rem;
}

p {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.button-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem; /* Espaciado uniforme entre los botones */
  width: 100%;
  margin-bottom: 1.5rem;
}

.custom-btn {
  width: 100%;
  border-radius: 10px;
  background-color: #dedede;
  color: #111827;
  border: none;
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background-color 0.2s ease;
}


.custom-btn:hover {
  background-color: #801717;
}

.continue-btn {
  margin-top: 1rem;
  width: 40%;
}
</style>
