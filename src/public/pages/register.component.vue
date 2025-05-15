
<template>
  <div class="register-container">
    <div class="form-section">
      <h2>Tell us about you</h2>
      <div class="p-fluid">
        <pv-input-text v-model="form.firstName" placeholder="First name" class="custom-input" />
        <pv-input-text v-model="form.lastName" placeholder="Last name" class="mt-3 custom-input" />
        <pv-input-text v-model="form.contactNumber" placeholder="Contact number" class="mt-3 custom-input" />
        <pv-input-text v-model="form.country" placeholder="Country" class="mt-3 custom-input" />
        <pv-select v-model="form.gender" :options="genders"   placeholder="Gender" class="mt-3 gender" />
        <pv-button label="Next" class="mt-4 custom-button"  @click="next" />
      </div>
    </div>
    <div class="image-section"></div>
  </div>
</template>


<script setup>
import { ref } from 'vue'
import router from "@/router/index.js";

const form = ref({
  firstName: '',
  lastName: '',
  contactNumber: '',
  country: '',
  gender: null
})

const genders = ['Male', 'Female', 'Other']

// Función para ir a la siguiente ventana
function  next(){
  router.push('/objetivo') // asegúrate que esta ruta exista en router/index.js
}


</script>



<style scoped>
.register-container {
  display: flex;
  height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.form-section {
  flex: 1;
  background-color: #f9f9fc;
  display: flex;
  flex-direction: column; /* Asegura que los elementos estén en una columna */
  justify-content: center; /* Centra los elementos verticalmente */
  align-items: center; /* Centra los elementos horizontalmente */
  padding: 3rem;
}

.p-fluid > * {
  display: block;
  width: 450px; /* Asegura que los inputs tomen todo el ancho disponible */

}

.image-section {
  flex: 1;
  background-image: url('@/assets/images/registro2.png');
  background-size: cover;
  background-position: center;
}

.form-section h2 {
  font-weight: bold;
  margin-bottom: 2rem;
  font-size: 35px;
  color: black;
  text-align: center; /* Centra el texto horizontalmente */
  width: 100%; /* Asegura que ocupe todo el ancho del contenedor */
}

.custom-input {
  background-color: white; /* Cambia el color de fondo del input */
  color: black; /* Cambia el color del texto */
  border: 1px solid #ccc; /* Ajusta el borde si es necesario */
  padding: 10px; /* Ajusta el padding para los inputs */
  border-radius: 5px; /* Bordes redondeados */
  font-size: 16px; /* Tamaño de fuente */
}

.gender {
  width: 450px;
  background-color: white;
  color: black;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  display: block;
}


.custom-button {
  background-color: #858484; /* Cambia el color de fondo */
  color: white; /* Cambia el color del texto */
  border: none; /* Quita el borde predeterminado */
  padding: 10px 20px; /* Agrega padding */
  font-size: 16px; /* Ajusta el tamaño del texto */
  border-radius: 5px; /* Borde redondeado */
  cursor: pointer; /* Cambia el cursor al pasar sobre el botón */
  margin-top: 2rem; /* Desplaza el botón hacia abajo */
}

.custom-button:hover {
  background-color: #45a049; /* Cambia el color de fondo cuando pasa el mouse sobre el botón */
}
</style>
