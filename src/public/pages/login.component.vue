
<script>
export default {
  name: "login"
}
</script>

<template>
  <div class="login-wrapper">
    <!-- Izquierda: Login -->
    <div class="left-panel">
      <div class="form-container">
        <h2 class="title">Log in</h2>
        <p class="subtitle">Please enter your details</p>

        <!-- Input de Email usando PrimeVue -->
        <pv-input-text
            label="Email address"
            placeholder="Enter your email"
            style="background-color: #D9D9D9; color: Black;"
            class="input"
            v-model="email"
        ></pv-input-text>

        <!-- Input de Password usando PrimeVue -->
        <pv-input-text
            label="Password"
            type="password"
            placeholder="Enter your password"
            style="background-color: #D9D9D9; color: Black;"
            class="input"
            v-model="password"
        ></pv-input-text>

        <div class="forgot-password">
          <a href="#">Forgot password</a>
        </div>

        <!-- Botón de Login usando PrimeVue -->
        <pv-button class="mb-4" @click="login"
          block
          label="Log in"
          style="background-color: #A1A4C7; color: white;"
        ></pv-button>

        <p class="terms">
          By continuing, you agree to the updated Terms of Sale, Terms of Service, and Privacy Policy
        </p>

        <!-- Botón de Login con Facebook usando PrimeVue -->
        <pv-button
            block
            label="Continue with Facebook"
            class="facebook-btn mb-3"
            style="background-color: #4281E0; color: white;"
            icon="pi pi-facebook"
            @click="loginWithFacebook"
        ></pv-button>

        <!-- Botón de Login con Google usando PrimeVue -->
        <pv-button
            block
            label="Continue with Google"
            class="google-btn"
            style="background-color: #E9E8EB; color: black;"
            icon="pi pi-google"
            @click="loginWithGoogle"
        ></pv-button>
      </div>
    </div>

    <!-- Derecha: Imagen -->
    <div class="right-panel"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import router from "@/router/index.js";

const email = ref('');
const password = ref('');

// Funciones de login
function login() {
  console.log("Email:", email.value);
  console.log("Password:", password.value);

  router.push('/register');
}

function loginWithFacebook() {
  console.log("Logging in with Facebook...");
}

function loginWithGoogle() {
  console.log("Logging in with Google...");
}
</script>

<style>
/* Estilos globales para asegurar que se use toda la pantalla */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

#app {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}
</style>

<style scoped>
.login-wrapper {
  display: flex;
  height: 100vh;
  width: 100vw;
}

.left-panel {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
}

.form-container {
  width: 80%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.title {
  font-size: 38px;
  color: #5c5e9a;
  margin-bottom: 4px;
  font-weight:bold;
}

.subtitle {
  color: #f39c12;
  margin-bottom: 24px;
}

.input {
  margin-bottom: 16px;
  border-radius: 10px;
  border:none;
}

.forgot-password {
  text-align: right;
  margin-bottom: 16px;
  font-size: 0.8rem;
}

.terms {
  font-size: 0.7rem;
  text-align: center;
  margin-bottom: 16px;
}

.facebook-btn {
  color: white;
  border-radius: 10px;
  border: none;
}

.google-btn {
  color: black;
  border-radius: 10px;
  border:none;
}

.right-panel {
  width: 50%;
  background-image: url('src/assets/images/registro.png');
  background-size: cover;
  background-position: center;
}

.mb-4{
  border-radius: 10px;
  border:none;
}
</style>
