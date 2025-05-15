<script>
export default {
  name: "Phrase",
  methods: {
    next() {
      this.$router.push("/next-page"); // Cambia "/next-page" por tu ruta real
    }
  }
}
</script>

<template>
  <div class="container">
    <pv-card class="card">
      <template #content>
        <img src="@/assets/images/mujer-meditando.png" alt="Commitment" class="commitment-image" />
        <h2 class="title">The commitment starts with you</h2>
        <p class="subtitle">
          “Trust in yourself and your potential, you can do much more than you think.”
        </p>
        <pv-button
            label="Accept the commitment"
            class="accept-btn"
            @click="next"
        />
      </template>
    </pv-card>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f9f9fb;
  padding: 1.5rem;
}

.card {
  padding: 2rem;
  text-align: center;
  max-width: 700px;
  width: 100%;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

.commitment-image {
  max-width: 420px;
  margin: 0 auto 1rem;
  display: block;
}

.title {
  font-size: 1.75rem;
  font-weight: 600;
  font-style: italic;
  margin-bottom: 0.5rem;
  color: #1f2937;
}

.subtitle {
  font-size: 0.9rem;
  font-style: italic;
  color: #6b7280;
  margin-bottom: 1.5rem;
}

.accept-btn {
  border-radius: 9999px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
}
</style>
