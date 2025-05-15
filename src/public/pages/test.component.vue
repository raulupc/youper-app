<template>
  <div class="container">
    <div class="card">
      <h2 class="title">What brings you to Youper?</h2>
      <p class="subtitle">
        We customize recommendations based on your goals
      </p>

      <!-- 1. How have you been feeling -->
      <div class="question">
        <p class="question-title">How have you been feeling most of the time these past few days?</p>
        <div class="options">
          <div v-for="option in feelings" :key="option.value" class="option">
            <input type="radio" v-model="form.feeling" :value="option.value" :id="option.value" name="feeling" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <!-- 2. What would you like to feel more -->
      <div class="question">
        <p class="question-title">What would you like to feel more of in your life?</p>
        <div class="options">
          <div v-for="option in desires" :key="option.value" class="option">
            <input type="radio" v-model="form.desire" :value="option.value" :id="option.value" name="desire" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <!-- 3. How do you react -->
      <div class="question">
        <p class="question-title">How do you react to problems lately?</p>
        <div class="options">
          <div v-for="option in reactions" :key="option.value" class="option">
            <input type="radio" v-model="form.reaction" :value="option.value" :id="option.value" name="reaction" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <!-- 4. What do you most need -->
      <div class="question">
        <p class="question-title">What do you most urgently need to improve?</p>
        <div class="options">
          <div v-for="option in needs" :key="option.value" class="option">
            <input type="radio" v-model="form.need" :value="option.value" :id="option.value" name="need" />
            <label :for="option.value">{{ option.label }}</label>
          </div>
        </div>
      </div>

      <!-- Continue Button -->
      <button @click="handleSubmit" class="continue-button">Continue</button>
    </div>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  data() {
    return {
      feelings: [
        { value: 'stressed', label: 'stressed' },
        { value: 'insecure', label: 'insecure' },
        { value: 'sad', label: 'sad' }
      ],
      desires: [
        { value: 'calm', label: 'calm' },
        { value: 'self-confidence', label: 'self-confidence' },
        { value: 'emotional-connection', label: 'emotional-connection' }
      ],
      reactions: [
        { value: 'I-get-stressed', label: 'I get stressed' },
        { value: 'doubt-myself', label: 'doubt myself' },
        { value: 'I-get-irritated', label: 'I get irritated' }
      ],
      needs: [
        { value: 'rest-better', label: 'rest better' },
        { value: 'my-self-estreem', label: 'MY self-estreem' },
        { value: 'my-personal-relatic', label: 'my personal relatic' }
      ],
      form: {
        feeling: '',
        desire: '',
        reaction: '',
        need: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      router.push("/phrase");
    }
  }
};
</script>

<style scoped>
/* Estilos generales */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7fafc;
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

.title {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #000;
  margin-bottom: 16px;
}

.subtitle {
  text-align: center;
  color: #000;
  font-size: 14px;
  margin-bottom: 16px;
}

.question {
  margin-bottom: 16px;
}

.question-title {
  color: #000;
  margin-bottom: 8px;
}

.options {
  display: flex;
  flex-direction: row; /* Alineación horizontal */
  flex-wrap: wrap;     /* Permite que bajen a otra línea si no caben */
  gap: 12px;           /* Espaciado entre opciones */
  justify-content: center; /* Centra las opciones horizontalmente */
}

.option {
  display: flex;
  align-items: center;
}



.option input[type="radio"] {
  margin-right: 8px;
}

/* Estilo de las etiquetas para las opciones */
.option label {
  color: #000; /* Color negro para las palabras */
}

.continue-button {
  width: 50%;
  padding: 12px;
  margin-top: 20px;
  background-color: #d3d2d2;
  color: black;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s ease;
}

.continue-button:hover {
  background-color: #414145;
}
</style>
